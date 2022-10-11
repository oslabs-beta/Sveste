import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

const db = process.env.AWS_SAM_LOCAL
  ? new DocumentClient({
      endpoint: 'http://host.docker.internal:8000',
    })
  : new DocumentClient();

export const addFavorite = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const { id, favorite } = JSON.parse(event.body);
    if (!id || !favorite.length) {
      throw Error('err: login and create a test to save favorites');
    }
    const result = await db
      .update({
        TableName: 'FavoritesTable',
        Key: { ID: id },
        // ReturnValues: 'UPDATED_NEW',
        UpdateExpression: 'SET #favorites = list_append(#favorites, :favorite)',
        ExpressionAttributeNames: {
          '#favorites': 'favorites',
        },
        ExpressionAttributeValues: {
          ':favorite': [favorite],
        },
      })
      .promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Success: test saved!',
        id,
        favorite: JSON.stringify(result),
        request: event.body,
      }),
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: err instanceof Error ? err.message : 'unknown error',
      }),
    };
  }
};

export const getFavorites = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const { id } = event.queryStringParameters;
    const res = await db
      .get({
        TableName: 'FavoritesTable',
        Key: {
          ID: id,
        },
        AttributesToGet: ['favorites'],
      })
      .promise();
    const data = await res.Item.favorites;
    return {
      statusCode: 200,
      body: JSON.stringify({
        favorites: data,
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: err instanceof Error ? err.message : 'unknown error',
      }),
    };
  }
};

export const deleteFavorite = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const { id, index } = JSON.parse(event.body);
    const result = await db
      .update({
        TableName: 'FavoritesTable',
        Key: { ID: id },
        ReturnValues: 'ALL_NEW',
        UpdateExpression: `REMOVE #favorites[${index}]`,
        ExpressionAttributeNames: {
          '#favorites': 'favorites',
        },
      })
      .promise();
    const res = await db
      .get({
        TableName: 'FavoritesTable',
        Key: {
          ID: id,
        },
        AttributesToGet: ['favorites'],
      })
      .promise();
    const data = await res.Item.favorites;
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: err instanceof Error ? err.message : 'unknown error',
      }),
    };
  }
};

import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { PromiseResult } from 'aws-sdk/lib/request';

const db = process.env.AWS_SAM_LOCAL
  ? new DocumentClient({
      endpoint: 'http://host.docker.internal:8000',
    })
  : new DocumentClient();
//handle favorites switches based on http method
//POST: input: id,favorite from body    return: updated user
//GET:  input id from body return: updated favorites array
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
        ReturnValues: 'UPDATED_NEW',
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
        ReturnValues: 'UPDATED_NEW',
        UpdateExpression: `REMOVE #favorites[${index}]`,
        ExpressionAttributeNames: {
          '#favorites': 'favorites',
        },
      })
      .promise();
    return {
      statusCode: 200,
      body: JSON.stringify({ result }),
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

//   //delete favorites is using remove in the update expression which works since favorites array is a set
//   //favorite in this context is the index key which is send from the favorite block component
//   //https://stackoverflow.com/questions/62459014/deleting-an-object-from-a-nested-array-in-dynamodb-aws-javascript-sdk
//   if (method === 'PUT') {
//     const result = await db.update({
//       TableName: 'FavoritesTable',
//       Key: { ID: _id },
//       ReturnValues: 'UPDATED_NEW',
//       UpdateExpression: `REMOVE #favoritesArray[${favorite}]`,
//     });
//     response = await {
//       statusCode: 200,
//       body: JSON.stringify({ result }),
//     };
//   }
// } catch (err: unknown) {
//   console.log(err);
//   response = {
//     statusCode: 500,
//     body: JSON.stringify({
//       message: err instanceof Error ? err.message : 'some error happened',
//     }),
//   };
// }

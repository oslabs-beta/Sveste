import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { genSalt, hash, compare } from 'bcryptjs';

const db = process.env.AWS_SAM_LOCAL
  ? new DocumentClient({
      endpoint: 'http://host.docker.internal:8000',
    })
  : new DocumentClient();

let headers = {
  'Content-Type': 'application/json',
};
/**
 *
 * @param event
 * @returns response object
 * body is an error message if email is taken otherwise it returns email and isLoggedIn bool = true
 * creates an entry in the favorites table with key of id being linked to the new user
 */
export const handleSignup = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const { email, password } = event.queryStringParameters;
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);
    const get = await db
      .get({
        TableName: 'UsersTable',
        Key: {
          ID: email,
        },
      })
      .promise();
    if (await get.hasOwnProperty('Item')) {
      return {
        statusCode: 409,
        headers,
        body: JSON.stringify({
          message: 'Email already in use',
        }),
      };
    }
    const write = await db
      .put({
        TableName: 'UsersTable',
        Item: {
          ID: email,
          email,
          password: hashedPassword,
        },
      })
      .promise();
    const createFav = await db
      .put({
        TableName: 'FavoritesTable',
        Item: {
          ID: email,
          favorites: [],
        },
      })
      .promise();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        isValidLogin: true,
        email,
      }),
    };
  } catch (err: Error | unknown) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        message: err instanceof Error ? err.message : 'some error happened',
      }),
    };
  }
};
/**
 *
 * @param event
 * @returns response object with isValidLogin bool as key
 */
export const handleLogin = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const { email, password } = event.queryStringParameters;
    const get = await db
      .get({
        TableName: 'UsersTable',
        Key: {
          ID: email,
        },
      })
      .promise();
    const isValidLogin = await compare(password, await get.Item.password);
    if (!isValidLogin) throw Error('Incorrect email or password.');
    return {
      statusCode: 200,
      body: JSON.stringify({
        isValidLogin,
        email,
      }),
    };
  } catch (err) {
    return {
      statusCode: 401,
      body: JSON.stringify({ err: err.message }),
    };
  }
};

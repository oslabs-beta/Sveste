import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from 'aws-lambda';
import {
  getFavorites,
  addFavorite,
  deleteFavorite,
} from './controllers/favoritesController';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { handleLogin, handleSignup } from './controllers/usersController';

// const db = process.env.AWS_SAM_LOCAL
//   ? new DocumentClient({
//       endpoint: 'http://host.docker.internal:8000',
//     })
//   : new DocumentClient();

export const serverFunction = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  let response: APIGatewayProxyResult;
  let headers = {
    'Content-Type': 'application/json',
  };
  try {
    switch (`${event.httpMethod} ${event.path}`) {
      case 'GET /api/favorites':
        return getFavorites(event);
        break;
      case 'POST /api/favorites':
        return addFavorite(event);
        break;
      case 'DELETE /api/favorites':
        return deleteFavorite(event);
        break;
      case 'POST /api/users/login':
        return handleLogin(event);
        break;
      case 'POST /api/users/signup':
        return handleSignup(event);
        break;
      default:
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ err: 'page does not exist' }),
        };
    }
  } catch (err) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ err: err.message }),
    };
  }
};

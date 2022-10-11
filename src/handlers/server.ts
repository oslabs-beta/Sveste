import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import {
  getFavorites,
  addFavorite,
  deleteFavorite,
} from './controllers/favoritesController';

import { handleLogin, handleSignup } from './controllers/usersController';

export const serverFunction = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
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
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ err: 'page does not exist' }),
        };
    }
  } catch (err) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ err: err.message }),
    };
  }
};

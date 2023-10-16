import schema from './schema';
//import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `src/functions/transport/handler.createReservation`,
  events: [
    {
      http: {
        method: 'patch',
        path: 'add-reservation',
        request: {
          schema: {
            'application/json': schema
          }
        }
      }
    }
  ]
}
import schema from './schema';
//import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `src/functions/transport/handler.create`,
  events: [
    {
      http: {
        method: 'post',
        path: 'create',
        request: {
          schema: {
            'application/json': schema
          }
        }
      }
    }
  ]
}

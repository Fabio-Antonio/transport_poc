//import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `src/functions/transport/handler.getAll`,
  events: [
    {
      http: {
        method: 'get',
        path: 'get-all',
      }
    }
  ]
}

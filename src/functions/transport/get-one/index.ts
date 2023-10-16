export default {
  handler: `src/functions/transport/handler.getById`,
  events: [
    {
      http: {
        method: 'get',
        path: 'get-one/{id}',
      }
    }
  ]
}
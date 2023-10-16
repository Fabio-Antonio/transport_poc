  export default {
    handler: `src/functions/transport/handler.deleteReservation`,
    events: [
      {
        http: {
          method: 'delete',
          path: 'delete-reservation/{transportId}/{reservationId}',
        }
      }
    ]
  }
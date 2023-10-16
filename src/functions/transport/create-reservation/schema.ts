export default {
    type: "object",
    properties: {
      transportId: { type: 'string' },
    },
    required: ['transportId']
  } as const;
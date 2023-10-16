export default {
  type: "object",
  properties: {
    date: { type: 'string' },
    time: { type: 'string' },
  },
  required: ['date','time']
} as const;

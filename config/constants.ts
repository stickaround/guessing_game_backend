export const appConfig = {
  mongoose: {
    url: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/guessing_game',
  },
  port: process.env.PORT || 3000,
};

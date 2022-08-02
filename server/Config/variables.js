const { PORT, HOST, MONGO_DB_NAME, MONGO_URI } = process.env;

export const config = {
  port: PORT || 3005,
  host: HOST,
  dbConnection: `${MONGO_URI}/${MONGO_DB_NAME}`,
};

<<<<<<< HEAD
const { PORT, HOST, MONGO_DB_NAME, MONGO_URI } = process.env;

export const config = {
  port: PORT || 3005,
  host: HOST,
  dbConnection: `${MONGO_URI}/${MONGO_DB_NAME}`,
};
=======
const { PORT, HOST, MONGO_DB_NAME, MONGO_URI } = process.env;

export const config = {
  port: PORT || 3005,
  host: HOST,
  dbConnection: `${MONGO_URI}/${MONGO_DB_NAME}`,
};
>>>>>>> df3aa0355ae16a734cfeb3d038f575eb7c7de743

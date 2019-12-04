import dotenv from "dotenv";
dotenv.config();

/*
 * Incase you do not use mongodb as data layer, remove the MONGO* fields initializations
 * p.s. do not forget to update the graphql/index.js as well
 */
const config = {
  APP_ENV: process.env.APP_ENV,
  APP_PORT: process.env.APP_PORT,
  MONGO_DB: process.env.MONGO_DB,
  MONGO_DB_USER: process.env.MONGO_DB_USER,
  MONGO_DB_PASSWORD: process.env.MONGO_DB_PASSWORD,
  MONGO_DB_HOST: process.env.MONGO_DB_HOST,
  MONGO_DB_PORT: process.env.MONGO_DB_PORT
};

export default config;

import express from "express";
import graphqlHTTP from "express-graphql";
import mongoose from "mongoose";
import Schema from "./graphql/Schema";
import config from "./config";

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: Schema,
    graphiql: true
  })
);
mongoose
  .connect(
    `mongodb://${config.MONGO_DB_USER}:${config.MONGO_DB_PASSWORD}@${config.MONGO_DB_HOST}:${config.MONGO_DB_PORT}/${config.MONGO_DB}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }
  )
  .then(() => {
    app.listen(config.APP_PORT, () => {
      console.log(`App listening to ${config.APP_PORT}....`);
      console.log("Press Ctrl+C to quit.");
    });
  })
  .catch(err => console.log(err));

/*
 * incase mongoose is not needed remove the above mongoose wrapper
 * and replace with the code below
 * Please also remove the relavant places where a mogoose model is used.
 * i.e. from the resolvers in mutations and queries fields and replace them with your own implementation
 */

/*
 app.listen(config.APP_PORT, () => {
      console.log(`App listening to ${config.APP_PORT}....`);
      console.log("Press Ctrl+C to quit.");
    });
*/

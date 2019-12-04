# GraphQL + Mongoose Boilerplate

This is a GraphQL boilerplate which uses `mongoose` to use the MongoDB as data layer.

## Usage

1. Clone the repo

```
git clone https://github.com/mohib0306/graphql-mongoose-boilerplate
```

2. Navigate to the folder
3. Create a `.env` file and add the values for your `mongodb` database, user, password and port. Also update the value for `NODE_PORT` to a port of your own choice. The file should look like this;

```
APP_ENV=development
APP_PORT=1444
MONGO_DB=db-name
MONGO_DB_USER=db-user
MONGO_DB_PASSWORD=db-password
MONGO_DB_PORT=db-port
MONGO_DB_HOST=db-host
```

3. Install the dependencies

```
yarn install
```

4. Start the server

```
yarn start
```

## Directory structure

1. GraphQL `types`, `schema` are in `graphql` folder
2. Mogoose models are located in `mongodb` folder

## Other usages

You can also use this boilerplate for other data sources. In that case you need to replace the server definition in `graphql/index.js` file. The file has already instructions on how to do that. Also update the `graphql/config.js` file to not initialize the `MONGO*` fields.

You also need to update the resolvers of mutations and queries in `graphql` folder to not use `mongoose` models.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

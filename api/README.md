# Spothire

## Running it

### For local dev

There are a few environmental variables that are expected to be defined `ARANGODB_USERNAME` and `ARANGODB_PASSWORD` are required to allow the app to talk to a local instance of ArangoDB. Additionally, the app refers to ArangoDB by hostname (since we are assuming Docker) and for that to work for local development you should add it to `/etc/hosts`:
```sh
cat /etc/hosts
127.0.0.1 localhost
127.0.0.1 arangodb
```
This project uses Webpack and Babel to transpile and contatenate files for both the frontend and backend in a single build step. Build the project and then run it:

```sh
> yarn run build
> yarn start
```

### Deployment

Containerizing this project is simply:

```sh
docker build -t spothire/server .
```

Docker compose runs the containers together. It gives a single command to start multiple containers. For it to work, you will need to define an `ARANGO_ROOT_PASSWORD` environmental variable and have an database called `spothire` created with a document collection called `users`.

```sh
docker-compose up
```

## Running the tests

```sh
> yarn test
```

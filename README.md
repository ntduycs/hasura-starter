# Getting started

## 1. Start the Hasura container

`docker-compose up -d`

(*) The following software/tools must be installed as prerequisites:

- [x] `postgres` (Version: 12+)
- [x] `docker`
- [x] `docker-compose`

(**) You are free to modify the `docker-compose.yaml` relying on your local machine after carefully consideration :yum:.

## 2. Install Hasura CLI

Please reference [here](https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli/) for details

## 3. Initialize Hasura repository (Optional)

`hasura init . --admin-secret t1ger1`

This will initialize a Hasura project at your current directory and populate it with some pre-configured files.




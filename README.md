# Mogame

This is a recreation of the famous browser game Ogame

# Dev Notes

### Commands

- go to the docker folder and `docker-compose up` to start all containers
- `docker ps` to get all running containers.
- `docker inspect {name}` to show more information like the current IPV4 of the db
- go to localhost:8080 to go to the phpMyAdmin page.
- use the IPV4 as the server and root as user and rpw as password
- add some tables and values

- go to the express folder and start the server `node index.js`
- now I should be able to fetch the data with Postman
-

## What do I need

- a frontend
- a database
- a server

## Prototype V1

I want to initialize a mysql database with only one table and one value and display it within the frontend

## Prototype V2

I want to add a button within the frontend that updates the value and render the new one

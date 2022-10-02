
# FullCycle Docker Challenge With NodeJS and NGINX

The goal is to create a docker-compose with 3 services:
- a mysql database
- a nodejs application
- a reverse proxy with nginx

When I run ```docker-compose up -d``` the service must be available at port 8080




## How I Did It

1. First I put the database service on docker-compose which was the easy part
2. I ran a isolated node api to test with nginx in another container without the docker-compose
3. I put it all together at docker-compose


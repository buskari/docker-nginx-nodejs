FROM node AS builder

WORKDIR /usr/src/api
COPY . .
RUN npm install

FROM node:18-alpine3.15

WORKDIR /usr/local/api
COPY --from=builder /usr/src/api /usr/src/api

CMD [ "node", "server.js" ]

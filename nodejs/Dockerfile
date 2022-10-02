FROM node AS builder

WORKDIR /usr/src/api
COPY . .
RUN npm install

FROM node:18-alpine3.15

WORKDIR /usr/src/api
COPY --from=builder /usr/src/api /usr/src/api
EXPOSE 3001

CMD [ "node", "server.js" ]

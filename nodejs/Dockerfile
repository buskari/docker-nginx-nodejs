FROM node AS builder

WORKDIR /usr/src/api
COPY . .
RUN npm install

FROM node:18-alpine3.15

WORKDIR /usr/src/api
COPY --from=builder /usr/src/api /usr/src/api
EXPOSE 3001

RUN apk add --no-cache openssl

ENV DOCKERIZE_VERSION v0.6.1

RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# CMD [ "node", "server.js" ]

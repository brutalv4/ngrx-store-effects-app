ARG NODE_VERSION=12-alpine

FROM node:$NODE_VERSION

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

COPY . .

ARG DEFAULT_PORT=3000

EXPOSE $DEFAULT_PORT

ENV PORT=$DEFAULT_PORT

CMD ["npm", "start"]

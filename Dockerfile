FROM node:12-alpine

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

COPY . .

CMD ["npm", "start"]

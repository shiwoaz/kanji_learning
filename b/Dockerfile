FROM node:latest

RUN mkdir /app

COPY . ./app

WORKDIR /app

RUN yarn install

EXPOSE 3002

CMD [ "node", "src/index.js" ]
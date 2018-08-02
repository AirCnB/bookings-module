FROM node:7.6-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install; npm run seed:db

EXPOSE 3004

CMD ["npm", "start"]

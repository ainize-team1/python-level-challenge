FROM mhart/alpine-node:12 AS build
WORKDIR /usr/src/app
COPY    package*.json ./
RUN     npm install
COPY    . .
RUN     npm run build

FROM    node:10-alpine
WORKDIR /usr/src/app
COPY    --from=build /usr/src/app ./

EXPOSE  3000

CMD     [ "npm", "start" ]
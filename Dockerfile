FROM mhart/alpine-node:12 AS builder
WORKDIR /app
COPY . .
RUN npm install react-scripts -g --silent
RUN npm install
RUN npm run build

FROM node:12
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]

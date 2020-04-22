FROM mhart/alpine-node:12 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm run build

COPY . .
EXPOSE 80
CMD ["node", "app.js"]

FROM mhart/alpine-node:12 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm run build
RUN npm run production

# COPY . .
# EXPOSE 80
# CMD ["node", "app.js"]

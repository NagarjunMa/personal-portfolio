# Use a newer version of Node that is compatible with npm@10.5.2
FROM node:18-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


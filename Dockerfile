FROM node:17-alpine as build-deps
WORKDIR /app
COPY package*.json .
RUN npm install
COPY ./public /app/public
COPY ./src /app/src
RUN npm run build

FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build-deps /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]


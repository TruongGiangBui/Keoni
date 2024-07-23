# Stage 1: Build the React app
FROM node:16 AS build

RUN mkdir /app
WORKDIR /app

COPY ["package.json", "tsconfig.json", "/app/"]

COPY ./ /app/
RUN cd /app && npm install

RUN npm -s run build

# Stage 2, based on Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

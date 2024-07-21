
FROM node:16-alpine
WORKDIR /app
COPY package.json ./
# Install dependencies
RUN npm install

COPY . .
# Build the application
RUN npm run build
# Use an nginx container to serve the built files
FROM nginx:alpine
# Copy the build files to the nginx html directory
COPY --from=0 /app/build /usr/share/nginx/html
# Expose the port the app runs on
EXPOSE 80
# Start nginx server
CMD ["nginx", "-g", "daemon off;"]

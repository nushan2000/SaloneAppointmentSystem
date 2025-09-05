# Stage 1: Build the React app
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Remove default nginx index page
RUN rm -rf ./*

# Expose Nginx port
EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]

# Stage 1: Build the React app
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


# Expose Nginx port
EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]

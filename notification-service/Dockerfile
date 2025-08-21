# Dockerfile for Node.js service
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy rest of the service files
COPY . .

# Expose port (use the service’s internal port)
EXPOSE 4000

# Start service
CMD ["npm", "start"]

# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Ensure models directory is copied
COPY models ./models

# Expose the port your app runs on
EXPOSE 8080

# Command to run your applications
CMD ["node", "server.js"]

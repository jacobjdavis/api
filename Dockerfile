# Use Node 20 alpine as parent image
FROM node:20-alpine

# Change the working directory on the Docker image to /app
WORKDIR /src

# Copy package.json and package-lock.json to the /app directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of project files into this image
COPY . .

# Expose application port
EXPOSE 5000

RUN npm run build
# Start the application
CMD npm run start

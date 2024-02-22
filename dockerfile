# Stage 1: Build stage
FROM node:latest AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies with `npm install --force`
RUN npm install --force

# Copy the rest of the application code to the working directory
COPY . .

# Run `npm run build:test` to build the application
RUN npm run build:test

# Stage 2: Serve stage
FROM node:alpine AS serve

# Set the working directory in the container
WORKDIR /app

# Copy the build artifacts from the build stage
COPY --from=build /app/build ./build

# Install `serve` globally
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Serve the built application with `serve -s build` when the container starts
CMD ["serve", "-s", "build"]


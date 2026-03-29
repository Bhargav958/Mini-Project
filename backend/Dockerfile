FROM node:18

WORKDIR /app

# Copy both package.json and package-lock.json if they exist
COPY package*.json ./  

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application (if you have a build step, otherwise you can skip this)
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]
# Use Node.js 18 as base
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json first and install dependencies
COPY package.json .
RUN npm install

# Copy backend code
COPY . .

# Expose port 5000
EXPOSE 5000

# Start backend server
CMD ["node", "server.js"]
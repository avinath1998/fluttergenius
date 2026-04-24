# Use Node base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy the rest of the app
COPY . .

# Build Next.js
RUN npm run build

# Expose port (Cloud Run uses 8080)
EXPOSE 8080

# Start app on port 8080
ENV PORT=8080
CMD ["npm", "start"]
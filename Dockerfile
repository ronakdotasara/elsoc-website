# Stage 1: Build the React app with Vite
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Set platform for proper native bindings
ENV DOCKER_BUILDKIT=1

# Copy package files
COPY package.json package-lock.json* ./

# Clean install with platform-specific bindings
RUN npm ci --silent || npm install --silent

# Copy all source files
COPY . ./

# Build the production app with Vite
RUN npm run build

# Stage 2: Production environment with Nginx
FROM nginx:stable-alpine AS production

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files from build stage (Vite outputs to 'dist' folder)
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:80 || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

# ----- BUILD STAGE -----
FROM node:20-alpine AS build

WORKDIR /app

# Copy only package files first
COPY package*.json ./

# Clean install
RUN npm install

# Copy full source
COPY . .

# Build Vite project
RUN npm run build

# ----- SERVE WITH NGINX -----
FROM nginx:alpine

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy build files
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom NGINX config
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

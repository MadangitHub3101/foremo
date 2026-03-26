# Use NGINX as base
FROM nginx:latest

# Copy all frontend files to NGINX html folder
COPY . /usr/share/nginx/html


COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port 80 for ECS / ALB
EXPOSE 80

# NGINX runs automatically by default
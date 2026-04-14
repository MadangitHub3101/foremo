FROM nginx:alpine

# Copy static files
COPY index.html /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Copy fixed nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# DigitalOcean needs port 8080
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

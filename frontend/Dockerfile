FROM nginx:alpine

# ✅ Copy ALL static files
COPY index.html /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# ✅ Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

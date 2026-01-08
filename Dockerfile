# Simple Nginx-based container to serve the static site
FROM nginx:alpine

# Copy project files into Nginx's default web root
COPY . /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Use the default Nginx startup command
CMD ["nginx", "-g", "daemon off;"]

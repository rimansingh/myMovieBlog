# Use the official Nginx image from the Docker Hub
FROM nginx:alpine

# Define build-time variable for API key
ARG API_KEY

# Set the environment variable inside the container
ENV API_KEY=$API_KEY

# Copy static files to the Nginx HTML directory
COPY public /usr/share/nginx/html

# Copy server files to the Nginx HTML directory
COPY server /usr/share/nginx/html/server

# Add a script to replace placeholders with environment variables
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx server
CMD ["/entrypoint.sh"]


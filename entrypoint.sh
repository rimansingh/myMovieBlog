#!/bin/sh

# Replace placeholders in config.js with actual environment variables
sed -i "s/REPLACE_WITH_API_KEY/$API_KEY/g" /usr/share/nginx/html/server/config.js

# Start Nginx
nginx -g "daemon off;"


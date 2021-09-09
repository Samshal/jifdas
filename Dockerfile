FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/jifdas /usr/share/nginx/html
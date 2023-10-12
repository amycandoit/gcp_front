FROM nginx
RUN ["rm", "-rf", "/usr/share/nginx/html/*"]
COPY ./build/* /usr/share/nginx/html/
COPY ./default.conf /etc/nginx/conf.d/default
EXPOSE 80


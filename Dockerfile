FROM nginx:latest

VOLUME /app/react-pipeline-test

ADD ./build /usr/share/nginx/html

COPY /home/ubuntu/work/my-tube/conf/nginx.conf /etc/nginx/nginx.conf

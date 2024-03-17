FROM alpine:latest

COPY crontabs /etc/crontabs2

CMD cat /etc/crontabs2/* | crontab - \
  && crond -f -d 8


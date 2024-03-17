FROM alpine:latest

COPY crontabs /etc/crontabs2

CMD echo -n $API_SECRET > /tmp/secret \
  & cat /etc/crontabs2/* | crontab - \
  && crond -f -d 8


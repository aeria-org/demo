FROM node:20
WORKDIR /opt/application/web
COPY . .

RUN npm install
CMD cp ../api/node_modules/aeria-sdk/dist/runtime.* node_modules/aeria-sdk/dist \
  && npm run build \
  && rm -rf /var/www/html/* \
  && mv dist/* /var/www/html

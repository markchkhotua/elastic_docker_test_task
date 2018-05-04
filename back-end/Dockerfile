FROM node:carbon

ENV NPM_CONFIG_LOGLEVEL warn

COPY . .

RUN npm install

CMD node bin/www.js

EXPOSE 8800

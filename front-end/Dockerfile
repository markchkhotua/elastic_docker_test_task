FROM node:carbon

ENV NPM_CONFIG_LOGLEVEL warn

COPY . .

RUN npm install

RUN npm install -g gulp gulp-cli

RUN npm install -g serve

RUN gulp bundle-prod

CMD serve -s dist

EXPOSE 5000

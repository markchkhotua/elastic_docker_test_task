# Elastic & Docker Test

## Backend
1. Run `npm install`
2. run `npm start`

##Frontend
1. Run `npm install -g gulp gulp-cli`
2. Run `npm install -g grunt grunt-cli`
3. Run `npm install`
4. Run `gulp build-dev`
5. Run `npm start`

##Devops

####Elasticsearch docker container

1. Pull elasticsearch docker container 

`docker pull docker.elastic.co/elasticsearch/elasticsearch:6.2.2`

2. Run image. This will run docker container in dev. mode

`docker run -d -p 9200:9200 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:6.2.2`

####Front-end docker container
1. Build image from `front-end` directory

`docker build -t test-front-end .`

2. Run docker container

`docker run -d -p 5000:5000 test-front-end`

####Back-end docker container
1. Build image from `back-end` directory

`docker build -t test-back-end .`

2. Run docker container

`sudo docker run --net="host" -d -p 8800:8800 test-back-end`



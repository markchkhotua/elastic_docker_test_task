'use strict';
import express from 'express' ;
import boom from 'express-boom' ;
import morgan from "morgan" ;
import useragent from 'express-useragent' ;
import bodyParser from 'body-parser' ;
import compression from 'compression' ;
import logger from './utils/logger' ;
import Routes from './routes' ;
import {checkAndAddToIndex} from './services/default';
const app = express();

app.use(compression());
app.use(logger);
app.use(boom());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    next();
});

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({type: 'application/*+json'}));
app.use(bodyParser.json());

app.use(useragent.express());
app.use('/', Routes);

checkAndAddToIndex();

module.exports = app;

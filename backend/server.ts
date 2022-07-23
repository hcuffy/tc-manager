//const express = require('express');
//const serveStatic = require('serve-static');
//const cors = require('cors');
//const bodyParser = require('body-parser');
//const mongoose = require('mongoose');

import * as express from 'express';
import * as serveStatic from 'serve-static';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import mongoose from 'mongoose';

import getConfig from './config';

const {database} = getConfig();
const developmentDatabaseURI = `mongodb://${database.host}:${database.port}/${database.dbName}`;
const mongoURI = process.env.MONGODB_URI || developmentDatabaseURI;

(async() => {
    try {
        await mongoose.connect(mongoURI);
        console.log('mongoDB connected');
    } catch (error) {
        console.log(`Mongo connection error: ${error}`);
    }
})();

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected');
});

mongoose.connection.on('error', err => {
    console.log(`Mongoose connection error: ${ err}`);
});

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: '15mb'}));
app.use(cors());
app.use(serveStatic('build'));

app.get('/', (_request, response) => {
    response.json({message: 'backend is working'});
});

app.listen(port);
console.log(`Server started on port ${port}`);

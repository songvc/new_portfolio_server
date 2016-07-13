import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import router from '../router';
import mongoose from 'mongoose';
import cors from 'cors';
import methodOverride from 'method-override';
import bluebird from 'bluebird';

const app = express();

// DB Setup
mongoose.connect('mongodb://localhost:auth/auth')
// Use ES6-style bluebird promises
mongoose.Promise = bluebird;

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json( {type: '*/*' }));
app.use(methodOverride());
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);

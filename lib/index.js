import express from 'express';
import http from 'http';
import compress from 'compression';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import router from '../router';
import mongoose from 'mongoose';
import cors from 'cors';
import methodOverride from 'method-override';
import Promise from 'bluebird';

const app = express();

// Use ES6-style bluebird promises
Promise.promisifyAll(mongoose);

// DB Setup
mongoose.connect('mongodb://localhost:auth/auth')
mongoose.connection.on('error', () => {
	throw new Error(`unable to connect to database: ${config.db}`);
});

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json( {type: '*/*' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compress());
app.use(methodOverride());
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);

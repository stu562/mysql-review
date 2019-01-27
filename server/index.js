const express = require('express');
const path = require('path');
const parser = require('body-parser');
const PORT = 3000;
const routes = require('./routes.js');
const db = require('../database/index.js'); //connects 

//iniate express
const app = express();

//middleware
app.use(parser.json());//this stuff transpiles  that why we need it 
app.use(parser.urlencoded({extended:true}));

//express 
app.use(express.static(path.resolve(__dirname, '../static')));

app.use("/api", routes);

app.listen(PORT, () => console.log('App is listening to port', PORT));



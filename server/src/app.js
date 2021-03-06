const express = require('express');
const cors = require('cors')
const path = require('path')
const planetsRouter = require('./routes/planets/planet.router.js');
const launchesRouter = require('./routes/planets/launches.router.js');

const morgan = require('morgan');
const app = express();

app.use(cors( { 
    origin: 'http://localhost:3000'
}));

app.use(morgan('combined'));
app.use(express.json());
app.use(express.static(path.join(__dirname,'..','public')));
app.get('/', (req,res) => { 
    res.sendFile(path.join(__dirname,'..','public','index.html'));
});
app.use(planetsRouter);
module.exports = app;
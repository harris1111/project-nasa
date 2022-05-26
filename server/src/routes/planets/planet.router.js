const express = require('express');

const {getallPlanets} = require('./planet.controller.js')
const planetsRouter = express.Router();

planetsRouter.get('/planets', getallPlanets);

module.exports = planetsRouter;
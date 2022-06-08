import express from 'express';

const launchesRouter = express.Router();

launchesRouter.get('/launches', getAllLaunches);

module.exports  = launchesRouter;
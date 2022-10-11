import runScopeHandler from '../MQTT/runScopeHandler.js';

import express from 'express'
const router = express.Router();

import customLogs from '../logging/logging.js'
const log = customLogs.getLogger('runScopeRouter')

import createNewStrategy from '../controllers/runScopeController.js'

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Run Scope Modifier' });
});

router.post('/', createNewStrategy)

export default router;

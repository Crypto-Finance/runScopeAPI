import runScopeHandler from '../MQTT/runScopeHandler.js';
import mainIntervalMapper from '../utils/mainIntervalHelpers.js'

import express from 'express'
const router = express.Router();

import customLogs from '../logging/logging.js'
const log = customLogs.getLogger('runScopeRouter')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Run Scope Modifier' });
});

router.post('/', (req, res, next) => {
  const runScope = req.body
  runScope.TP /= 100
  runScope.SL /= 100
  if(runScope.entryStrat === 'cross') {
    runScope.entryPeriod = [3, 6, 50]
  }
  else {
    runScope.entryPeriod = [200]
  }
  runScope.mainInterval = mainIntervalMapper[runScope.mainInterval]
  runScope.entryPeriod = mainIntervalMapper[runScope.mainInterval]
  runScope.exitPeriod = []
  runScope.exitInterval = []
  log.info(JSON.stringify(runScope))
  res.send(runScope)
})

export default router;

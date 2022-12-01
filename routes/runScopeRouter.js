import express from 'express'
const router = express.Router();

import customLogs from '../logging/logging.js'
const log = customLogs.getLogger('runScopeRouter')

import { 
      createNewStrategy,
      getAllStrategies, 
      deleteStrategy,
       } from '../controllers/runScopeController.js'

router.get('/', (req, res, next) => {
  res.render('createNewStrategy', { title: 'Run Scope: Create New Strategy' });
});

router.post('/', createNewStrategy)

router.get('/currentRunScope', getAllStrategies)

export default router;

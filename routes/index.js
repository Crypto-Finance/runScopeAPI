import runScopeHandler from '../MQTT/runScopeHandler.js';
import express from 'express'
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Run Scope Modifier' });
});

router.post('/', (req, res, next) => {

})

export default router;

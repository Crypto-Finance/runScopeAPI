import mainIntervalMapper from '../utils/mainIntervalHelpers.js'

import customLogs from '../logging/logging.js'
const log = customLogs.getLogger('runScopeController')

import Strategy from '../models/strategy.js'

async function createNewStrategy(req, res, next) {
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
}

export default createNewStrategy
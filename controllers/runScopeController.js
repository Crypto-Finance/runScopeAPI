import mainIntervalMapper from '../utils/mainIntervalHelpers.js'
import mqttClient from "../MQTT/mqtt.js";

import customLogs from '../logging/logging.js'
const log = customLogs.getLogger('runScopeController')

import Strategy from '../models/strategy.js'

export async function getAllStrategies(req, res, next){
    res.render('currentRunScope', { title: 'Run Scope: Current Run Scope'})
}

export async function createNewStrategy(req, res, next) {
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
    mqttClient.publish("runScopeAPI/actRunScope/orchestrator/newStrategy", JSON.stringify(runScope))
    //TO SEE WHAT TO SEND BACK
    res.send(runScope)
}

export async function deleteStrategy(req, res, next) {

} 
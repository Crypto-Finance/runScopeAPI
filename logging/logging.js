import log4js  from "log4js";

import logConf from '../config/loggers.json' assert {type: 'json'}

log4js.configure(logConf)

class customLogs{

    static getLogger(logger){

        return log4js.getLogger(logger)
    }
}

export default customLogs
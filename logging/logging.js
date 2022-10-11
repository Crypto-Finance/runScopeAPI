import log4js  from "log4js";

log4js.configure(
    {
        "appenders": {
            "debug": {
            "type": "file",
            "filename": "log/debug.log",
            "maxLogSize": 10485760,
            "numBackups": 3
            },
            "console": 
            { "type": "stdout" },
            "errorFile": {
            "type": "file",
            "filename": "log/errors.log"
            },
            "errors": {
            "type": "logLevelFilter",
            "level": "ERROR",
            "appender": "errorFile"
            }
        },
        "categories": {
            "default": { "appenders": [ "debug", "errors", "console" ], "level": "DEBUG" }
        }
    }
)

class customLogs{

    static getLogger(logger){

        return log4js.getLogger(logger)
    }
}

export default customLogs
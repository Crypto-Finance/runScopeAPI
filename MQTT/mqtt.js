import mqtt from 'mqtt'

import customLogs from '../logging/logging.js'
const log = customLogs.getLogger('mqttClient')

import mqttConfig from '../config/conf.js'
const {base, host, port} = mqttConfig

class mqttClient {
        
    static connect(){
        log.info('Connected to mqtt')
    }

    static error(errorMsg){
        log.error(`Error with client ${errorMsg}`)
    }

    static reconnect(){
        log.info('Reconnecting to client')
    }

    static offline(){
        log.info('Client went offline')
    }

    static async publish(topic, message){
        client.publish(topic, message, (err) => {
            if(err){
                log.error(`message="Error when publish" topic=${topic}`)
                return
            }
            log.info(`message="Publish successful" topic=${topic}`)
            return 
        })
    }
}

//Create Globa Mqtt client
log.debug("Initializing mqtt client")
const client =  mqtt.connect(`${base}${host}:${port}`, mqttConfig.config)

client.on('connect', mqttClient.connect )

client.on('reconnect', mqttClient.reconnect)

client.on('offline', mqttClient.offline)

client.on('error', mqttClient.error)

export default mqttClient
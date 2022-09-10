const mqttConfig = {
    base: 'mqtt://',
    host: 'localhost',
    port: '1883',
    config: {
        
            clientId: 'runScopeAPI',
            clean: true,
            connectTimeout: 4000,
            //username: '',
            //password: '',
            reconnectPeriod: 1000,   
    }
}

export default mqttConfig
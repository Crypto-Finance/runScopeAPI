import mongoose from 'mongoose'

import { Strategy } from '../models/strategy'
import customLogs from '../logging/logging.js'
const log = customLogs.getLogger('runScopeRouter')

const mongoURL = process.env.MONGOURL

class strategyDao{

    constructor(){
        log.info('Strategy DAO initilized')
        this.URL = mongoURL
    }

    async connect2DB(){
        log.info('Conecting to MongoDB Atlas')
        try{
            await mongoose.connect(
                this.URL,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                })
        } catch(e) {
            log.error(e)
        }
    }

    async addNewStrategy(newStrategy){
        log.info('Adding strategy')
        await this.connect2DB()
        let strategies = await this.getAllStrategies()
        if(strategies === false){
            log.info('There was an error getting all strategies')
        }
        if(strategies.length != 0){
            //TODO
        } else {
            try{
                await Strategy.create(newStrategy)
            }catch(e){
                log.error(e)
                return false
            }
        }
        return true
    }

    async getAllStrategies(){
        log.info('Retrieving all strategies')
        await this.connect2DB()
        let res
        try{
            res = await Strategy.find({})
        }catch(e){
            log.error(e)
            return false
        }
        log.info('All strategies retrieved')
        return res
    }
}

export default strategyDao
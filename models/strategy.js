import mongoose from 'mongoose'
const Schema = mongoose.Schema

const strategySchema = new Schema({
    coin: {
        type: String,
        required: true
    },
    pair: {
        type: String,
        required: true
    }, 
    entryStrat: {
        type: String,
        required: true
    }, 
    exitStrat: {
        type: String,
        required: true
    }, 
    TP: {
        type: Number,
        required: true
    },
    SL: {
        type: Number,
        required: true
    },
    mainInterval: {
        type: String,
        required: true
    }, 
    entryPeriod: {
        type: Array,
        required: true
    },
    entryInterval: {
        type: Array,
        required: true
    }, 
    exitPeriod: {
        type: Array,
        required: true
    },
    exitInterval: {
        type: Array,
        required: true
    }
}, {
    timestamps: true
})

const Strategy = mongoose.model('Current', strategySchema)

export default Strategy
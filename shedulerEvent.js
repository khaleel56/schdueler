const mongoose = require('mongoose')

const SchedulerEvent = new mongoose.Schema({
    schedulerType:{
        type:String
    },
    status:{
        type:String
    },
    active:{
        type:Boolean
    }
},{timestamps:true})

model.exports = mongoose.model('Scheduler_Event',SchedulerEvent)
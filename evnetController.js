const  SchedulerEventModel = require('../models/shedulerEvent')

exports.invoke = async () =>{

    try {
        const shceduerRunning = await SchedulerEventModel.findOne({type:'daily',status:'Inprogress', active : true})
        if(shceduerRunning){
            console.log('schdeuler already in progress')
            return 
        }
        const shceduler =await SchedulerEventModel.create({type:'daily',status:'Inprogress', active : true})

        console.log('schdeuler invoked')
        console.log('turn of the scheduler')
        await SchedulerEventModel.findOneAndUpdate({_id:shceduler._id},{type:'daily',status:'Inprogress', active : true})
    }catch(err){
        console.log(err)
    }

}

const schedule = require('node-schedule')

const eventController = require('./evnetController')

//will run for every second
schedule.scheduleJob(`* * * * * *`, async () => {
    try {
        await eventController.invoke();

    } catch (err) {
        console.log('schedule error',err)
    }
});
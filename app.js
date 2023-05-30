const { config } = require('dotenv')
const express =require('express')

const port = process.env.PORT || 4000

require('dotenv').config()

const app = express()

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4,
},(err)=>{
    if(!err) console.log('connected to DB')
    else console.log(err)
})

require('./Controller/shedulerController')


app.listen(port, console.log('app running on localhost:5000'))
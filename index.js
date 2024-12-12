 // loads .env file contents into process.env by default
 
 require('dotenv').config()
 const express = require('express') 
 const cors = require('cors')
 const router = require('./routes/router')
 require('./config/connection')

 const pfServer = express()

 pfServer.use(cors())
 pfServer.use(express.json())
 pfServer.use(router)
 pfServer.use('/uploads',express.static('./uploads'))

 const PORT = 3000 || process.env.PORT

 pfServer.listen(PORT,() => { 
    console.log(`Project Fair Server started at port : ${PORT} and waiting for client request!!`);
 })


 //http://localhost:3000/ - get

 pfServer.get('/', (req,res) => {
    res.status(200).send(`<h1 style = "color:black"> Project Fair Server Started and Waiting for Client Request!!</h1>`)
 })

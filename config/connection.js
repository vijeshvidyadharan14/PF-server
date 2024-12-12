const mongoose = require('mongoose')
const connection_string = process.env.connectionstring

mongoose.connect(connection_string).then((res) => {
    console.log("MONGODB ATLAS CONNECTED SUSSESSFULLY WITH PFSERVER");
    }).catch((err) => {
        console.log("MONGODB ATLAS CONNECTION FAILED");
        console.log(err);   
})
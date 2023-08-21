const mongoose = require("mongoose");
const config = require('./config');


const dbURL = config.db.url


mongoose.connect(dbURL)
.then((e) =>{
     console.log("mmongoDb atlas is connected--")
})
.catch((error) =>{
    console.log(error);
    process.exit(1);
})
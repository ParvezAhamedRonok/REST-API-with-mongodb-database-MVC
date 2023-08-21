require("dotenv").config();

// for Access from anywhere---
// & speacially access from the HEROKU port like that---
const dev = {
     app:{
        port : process.env.PORT || 4000
     },
     db:{
        url : process.env.DB_URL || "mongodb://localhost:27017/userDemoDbFirst"
     }
}


module.exports = dev
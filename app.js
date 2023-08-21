const express = require("express");
const cors = require("cors");
const app = express();
require("./config/db")

const userRouter = require("./routers/user.route")


app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use("/api/users" , userRouter)




app.get("/" , (req , res) =>{
   res.sendFile(__dirname + "/./views/index.html")
})


//invalid route-------->>
app.use((req , res , next) =>{
  res.status(404).json({
     message : "Route didn't Found..."
  })
})
//Server ---Error handler---------->
app.use((req , res , next) =>{
  res.status(500).json({
     message : "Something has broken....."
  })
})





module.exports = app;
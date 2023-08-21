
let users = require("../models/user.model");
const {v4: uuidv4} = require("uuid");


// get users
const getAllUsers =  (req , res) =>{
    res.status(200).json({users});
};


// create users / POST MEthods
const CreatUser =  (req , res) =>{
      const newUser = {
        id:uuidv4(),
       username : req.body.username,
       email : req.body.email,
      };
      users.push(newUser)
    res.status(200).json(users);
};




// Update users / PUT kivabe korte hoy seita akhon janbo ---->
const UpdateUsers =  (req , res) =>{
  const userid = req.params.id;
  const{username , email} = req.body;
  users.filter((user) => user.id  === userid).map((x) =>{
     x.username = username;
     x.email = email
  })

res.status(200).json(users);
};



// Update users / PUT kivabe korte hoy seita akhon janbo ---->
const DeletUser =  (req , res) =>{
  const userid = req.params.id;
  users =  users.filter((user) => user.id !== userid)

res.status(200).json(users);
};













// for exports those functions
module.exports = { getAllUsers , CreatUser , UpdateUsers , DeletUser };

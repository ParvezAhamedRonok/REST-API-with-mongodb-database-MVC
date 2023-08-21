const User = require("../models/user.model")
const {v4: uuidV4} = require("uuid");




//step-2-----
const getAllUsers = async(req , res) =>{
      try {
        const allUsers = await User.find();
        res.status(200).json(allUsers)
      } catch (error) {
        res.status(500).send(error.message)
      }
};


//step-3-------founding a single user--
const getOneUser = async(req , res) =>{
       try {
        const userOne = await User.findOne({id : req.params.id});
        res.status(200).json(userOne)
       } catch (error) {
        res.status(500).send(error.message)
       }
};


//step-1
const cretaeUser = async(req , res) =>{
     try {
      const newUser = new User({
        id:uuidV4(),
        name:req.body.name,
        age:Number(req.body.age)
     })
   
   await newUser.save();
   
     res.status(201).json(newUser )
     } catch (error) {
        res.status(500).send(error.message)
     }
};



// step- 5 ----update user--updte user by the help of id
const updateUser = async(req , res) =>{
  try {
    const updateUser = await User.findOne({id : req.params.id});
       updateUser.name = req.body.name,
       updateUser.age = Number(req.body.age),
    
    await updateUser.save();
 
      res.status(200).json(updateUser )
      } catch (error) {
          res.status(500).send(error.message)
      }
};


//step--4----delete user
const deletUser = async(req , res) =>{
  try {
    const userOne = await User.deleteOne({id : req.params.id});
    res.status(200).json({message : "user has been deleted.."})
   } catch (error) {
    res.status(500).send(error.message)
   }
};




module.exports = {getAllUsers , getOneUser , cretaeUser , updateUser , deletUser};

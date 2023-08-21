const express = require("express");
const router = express.Router();
const { getAllUsers, cretaeUser, getOneUser, deletUser, updateUser} = require("../Controllers/user.controller");
//end of the importing..




router.get("/" , getAllUsers); // get all users from data base.
router.post("/" , cretaeUser); 
router.post("/:id" , getOneUser); // for founding specific one user from database by the help of params
router.delete("/:id" , deletUser); // for delete a  specific one user from database by the help of params,
router.patch("/:id" , updateUser); // for update a  specific one user from database by the help of params,



module.exports = router;
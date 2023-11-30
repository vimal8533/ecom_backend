const { register, login } = require("../controller/userController");

const userRouter=require("express").Router();

userRouter.post("/regster",register);
userRouter.post("/login",login);
module.exports=userRouter;
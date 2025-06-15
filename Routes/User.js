const express = require('express')


const { Register, SignIn } = require('../Controllers/User');
const { validRegister, validation, validSignIn } = require('../Middlewares/Validator');
const { isAuth } = require('../Middlewares/isAuth');

const UserRouter = express.Router()

UserRouter.post('/Register',validRegister,validation, Register)


UserRouter.post('/SignIn', validSignIn,validation,SignIn)

UserRouter.get('/currentUser', isAuth, (req,res)=> res.send(req.user))

module.exports= UserRouter
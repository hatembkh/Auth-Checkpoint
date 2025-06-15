const {body, validationResult } = require('express-validator')

exports.validRegister = [
    body('email', 'Not a valid E-mail').isEmail(),
    body('password','Your passwrod must contain 8 characters').isLength({min : 8})
]

exports.validSignIn = [
    body('email', 'Not a valid E-mail').isEmail(),
    body('password','Your passwrod must contain 8 characters').isLength({min : 8})
]


exports.validation=(req,res,next)=>{
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).send(errors)
    }

    next()
}
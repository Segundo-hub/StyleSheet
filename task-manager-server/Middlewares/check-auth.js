
const jwt = require('jsonwebtoken');
const userModel = require('../Model/models/user.model');
const ErrorResponse = require('./../utils/ErrorResponse')

module.exports.isAuthenticated = async (req, res, next) => {
    try {
        let token 
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            token = req.headers.authorization.split(" ")[1];
        }
        if(!token){
            return next( new ErrorResponse('You are not authorized to enter this route', 401))
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModel.findById(decode.userId);
        req.user = user
        next()
    } catch (error) {
        res.send({ msg: "You are not authorized to enter this route", error: error });
    }

} 
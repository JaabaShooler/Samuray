const jwt = require('jsonwebtoken')
const {jwtSecret} = require('../../config/app')

module.exports = (req,res,next) => {
    const authHeader = req.get('Authorization');
    if(!authHeader){
        res.status(401).json({message: 'Token not provided'});
    }

    const token = authHeader.split(" ")[1];

    try{
        jwt.verify(token, jwtSecret)
    }catch (e) {
        if(e instanceof jwt.JsonWebTokenError){
            res.status(401).json({message: "Invalid token"})
        }
    }

    next();
}
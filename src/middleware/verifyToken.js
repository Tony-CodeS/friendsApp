const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const verifyToken =(req, res, next) =>{
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')){
      res
      .status(401)
      .json({message:'denied', success:false})   
    }

    const token = authHeader.split(' ')[1]
    const secret = process.env.JWT_SECRET

    try{
        const verified = jwt.verify(token, `${secret}`)
        req.user = verified

        next();
    }
    catch(error){
        res
        .status(401)
        .json({message:'denied', success:`${error.message}`})  
    }
}

module.exports = verifyToken
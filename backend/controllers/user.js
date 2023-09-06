const User = require('../models/user') ;
const bcrypt = require('bcrypt') ;
const jwt = require('jsonwebtoken') ;

// /api/user/login
const register = async(req, res)=>{
    const {name, email, password }= req.body;
    if(!name || !email || !password){
        res.status(400) ;
        throw new Error('All fields are mandatory !!') ;
    }
    const avlUser = await User.findOne({email}) ;
    if(avlUser){
        res.status(400) ;
        throw new Error('User already present') ;
    }
    const hashPassword = await bcrypt.hash(password, 10) ;
    const user = await User.create({
        name,
        email,
        password: hashPassword,
    }) ;
    if(user){   
      res.status(200).json({_id: user.id, email: user.email}) ;
    }else{
        res.status(400) ;
        throw new Error("User data is not valid") ;
    }
} ;
const login = async(req, res)=>{
    const {email, password} = req.body ;
    if(!email || !password){
        res.status(400) ;
        throw new Error("All fields are mandatory!!") ;
    }
    const user = await User.findOne({email}) ;
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user:{
                  username: user.username,
                  email:user.email,
                  id:user.id,
            },
      }, process.env.ACCESS_TOKEN_SECERET,
      {expiresIn:"1m"}
      ) ; 
      res.status(200).json({accessToken}) ;
    }else{
        res.status(401)
        throw new Error("Email and Password is not valid") ;
  }
} ;
module.exports = {register, login} ; 
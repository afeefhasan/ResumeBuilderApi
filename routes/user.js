const express = require("express");
const router = express.Router();
const bcryptjs = require('bcryptjs');
const { check,validationResult } = require('express-validator');
const UserSchema = require('../schemas/user');

router.get(
    '/',
    async (req,res) => {
    return res.status(200).json({msg : "hello"});
    });
router.post(
    '/signup',
    async (req,res) => {
        try{
            let {email,password,name} = req.body;
            let user = await UserSchema.findOne({email : email});
            const errors = validationResult(req);
            if(!errors.isEmpty())
            {
                return res.status(401).json({errors : errors.array()});
            }

            if(user){
                return res.status(401).json( "present")
            }
            
            const salt = await bcryptjs.genSalt(10);
            password = await bcryptjs.hash(password,salt);

            user = new UserSchema({
                email,
                password,
                name,
                });
                await user.save();
                let user2 = await UserSchema.findOne({email})
                res.json(user2);
        } catch (error){
            return res.status(500).json({ msg : "Server Error....."});
        }
    }
);
router.post(
    '/login',
    [
        check('email','type your email').isEmail(),
        check('password','Password is required').not().isEmpty()
    ],
    async (req,res) => {
        try {
            let {email,password} = req.body;
            console.log(req.body);
            const errors = validationResult(req);
            let user = await UserSchema.findOne({email})
            if(!errors.isEmpty()){
                return res.status(401).json({errors : errors.array})
            
            }
            if(!user){
                return res.status(401).json("Not Found");
            }

            let isPasswordMatch = await bcryptjs.compare(password,user.password);

            if(isPasswordMatch === true){
                res.status(200).json(user);
                
            }
            else {
                res.status(401).json('wrong password');
            }

       } catch (error){
            console.log(error.message);
            return res.status(500).json({msg : "Server Error..."});
       }
    }
);


module.exports = router;
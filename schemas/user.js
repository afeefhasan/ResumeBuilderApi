const mongoose = require('mongoose');

let UserSchemas=mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        resumes:[
            {
                type:mongoose.Schema.ObjectId
            }
                
            
        ]
    }
);

module.exports = UserSchemas = mongoose.model('user',UserSchemas);
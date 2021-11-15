const express_ = require('express');
const app = express_();
const rateLimit = require("express-rate-limit");
const xss  = require("xss-clean");
const helmet = require("helmet");
const mongoose = require('mongoose');
var cors = require('cors');
const bodyParser = require("body-parser")
const uri = "mongodb+srv://afeef:afeef%401180@cluster0.kt9dn.mongodb.net/ResumeMaker?retryWrites=true&w=majority";
require('dotenv').config();
const connectToDatabase = async () => {
    try{
        await mongoose.connect(uri,{
            useCreateIndex: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
            useNewUrlParser: true
        })
        console.log("MongoDB is connected");
    } catch(error){
        console.log(error);

        process.exit(1);
    }
}
connectToDatabase();
const apiLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 15 minutes
    max: 500,
    message:
    "Too many accounts created from this IP, please try again after 15 min"
});
app.use(apiLimiter);//safety against DOS attack
app.use(cors());//to follow cors policy
app.use(xss());//safety against XSS attack or Cross Site Scripting attacks
app.use(helmet());//safety against XSS attack
app.use(express_.json({ extended: false }));
app.use(express_.static('.'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use("/api/user", require('./routes/user'));
app.use("/api/resume", require('./routes/resume'));

let PORT = process.env.PORT || 4000;
app.listen(PORT, () => 
    console.log(`the server is running on the port: ${PORT}`)
);

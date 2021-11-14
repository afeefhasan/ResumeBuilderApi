const express = require("express");
const router = express.Router();
const pdf = require("html-pdf");
const { check,validationResult } = require('express-validator');
const UserSchema = require('../schemas/user');
const ResumeSchema = require('../schemas/resume');
const pdfTemplate = require("../documents");

const options = {
	height: "42cm",
	width: "29.7cm",
	timeout: "6000",
};

router.get(
    '/',
    async (req,res) => {
    return res.status(200).json({msg : "hello"});
    });

router.post(
    '/create',
    async(req,res)=>{
        try{
            let {user_id}=req.body;
            resume = new ResumeSchema({
                firstname:"",
                lastname:"",
                title:"",
                address:"",
                phone:"",
                email:"",
                links:[],
                education:[],
                experience:[],
                skills:[],
                projects:[],
                honors:[],
                user_id
                });
                await resume.save();
            var data2=await UserSchema.findByIdAndUpdate(user_id,{$push : { "resumes" : resume._id}})

            res.json(resume._id);
        }catch(error){
            console.log(error.message);
            return res.status(500).json({msg : "Server Error..."});
        }
    }
)
router.post(
    '/edit',
    async(req,res)=>{
        try{
            let {firstname,lastname,address,title,phone,email,links,education,experience,skills:{programinglanguages,libraries,tools,databases},projects,honors,resume_id}=req.body;
            var data = await ResumeSchema.findByIdAndUpdate(
                resume_id,{ "firstname" : firstname,"lastname" : lastname,"address": address, "title" : title,"phone": phone,
                "email" : email,"links":links,"education":education,"experience":experience, skills : {"programinglanguages" : programinglanguages,"libraries" : libraries,"tools" : tools,"databases" : databases},
                "projects" : projects,"honors":honors});
            var data2=await ResumeSchema.findById(resume_id)

            pdf.create(pdfTemplate(data2), options).toFile(`${__dirname}/Resume${resume_id}.pdf`, (err) => {
                if (err) {
                    console.log(err);
                    res.send(Promise.reject());
                } else res.send(Promise.resolve());
            });
        }catch(error){
            console.log(error.message);
            return res.status(500).json({msg : "Server Error..."});
        }
    }
);
router.post("/fetch-pdf", (req, res) => {
    let {resume_id}=req.body;
	const file = `${__dirname}/Resume${resume_id}.pdf`;



	res.download(file);
});
router.post(
    '/delete',
    async(req,res)=>{
        let {resume_id,user_id} = req.body;
        var data = await ResumeSchema.findByIdAndDelete(resume_id);
        console.log(data);
        var datas = await  UserSchema.findByIdAndUpdate(user_id,{$pull : {"resumes" : resume_id}});
        //remove pdf file from this directory
        fs.unlink(`${__dirname}/Resume${resume_id}.pdf`, (err) => {
            if (err) {
                console.log(err);
                res.send(Promise.reject());
            } else res.send(Promise.resolve());
        });
        res.send(datas);
    }
)
router.post(
    '/list',
    async(req,res)=>{
        let {user_id}=req.body;
        let user=await UserSchema.findById(user_id,{password:0});
        let arr=user.resumes;
        res.json(arr)
    }
)
module.exports = router;
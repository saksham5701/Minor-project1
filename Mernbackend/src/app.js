const express =require('express');
const path=require("path");
const app = express();
const hbs=require("hbs");
const port=process.env.port || 3000;  //jo bhi avalable port ho vo allot ho jaaye
require('./db/conn');

const Signup=require("./models/signups")


const static_path = path.join("__dirname")

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("view engine","hbs");
app.use(express.static(static_path))

app.get("/",(req,res) => {
res.render("index")
});

app.get("/signup",(req,res) => {
    res.render("signup")
});
app.post("/signup",async(req,res)=>{
    try{
        const password=req.body.password;
        const cpassword=req.body.cpassword;
    
    if(password===cpassword){
        const registerhelper=new Signup
        ({

        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.emailid,
        aadhar:req.body.aadhar,
        password:req.body.password,
        cpassword:req.body.cpassword

    })
    const signuped=await registerhelper.save();
    res.status(201).render(index);
    }else{
        res.send("password are not matching")
    }
}
catch(error){
    res.status(400).send(error);
}
})

app.listen(port,()=>{
    console.log(`server is running at port no. ${port}`);
}
)
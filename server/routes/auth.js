import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt"
const  router = express.Router()

router.post('/register', async (req, res)=>{
    try {
        const {name,email,password} = req.body;
        const user = await User.findOne({email});
        if(user) {
            return res.status(401).json({success:false, message:"user Alrey Exist"})
        }

        const hashPasword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name, email, password:hashPasword
        })

        await newUser.save();
        return res.status(200).json({success:true, message:"Account Created"});
    } catch(err){
        console.log(err.message);
        return res.status(500).json({success:false, message:"error in adding Account"});
    }
})

export default router;
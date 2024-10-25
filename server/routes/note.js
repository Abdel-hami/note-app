import express from 'express'
import Note from '../models/NoteModal';

const router = express.Router();
router.post('/add', async(req, res) => {
    try {
        const {title,description} = req.body;
        
        const newNote = new Note({
            title,description
        })

        await newUser.save();
        return res.status(200).json({success:true, message:"Account Created"});
    } catch(err){
        console.log(err.message);
        return res.status(500).json({success:false, message:"error in adding Account"});
    }
})
export default router;
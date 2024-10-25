import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
    {
        title:{type:String, required:true},
        description:{type:String, required:true,unique:true},
        userId:{type:mongoose.Schema.Types.ObjectId, ref:'user'},
    }
)

const Note = mongoose.model('note', NoteSchema)
export default Note;
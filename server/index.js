import express from 'express';
import cors from "cors"
import connectToMongoDb from './db/db.js';

import authRouter from './routes/auth.js'
import noterouter from './routes/note.js'

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/note', noterouter);

app.listen(5000,()=>{
    connectToMongoDb();
    console.log("Am listening in port 5000")
})

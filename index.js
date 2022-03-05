import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import router from './src/routes/blogRoute.js';

dotenv.config();

const app = express();

app.use(express.json())
app.use(router);

const mongoURL = process.env.mongoURL;

mongoose.connect(mongoURL);

mongoose.connection.on("connected",()=>{
    console.log("Connected to the mongodb.")
})
app.listen(3000,()=>{
    console.log("Server running at port 3000.")
})

//mongodb+srv://furebo:<password>@cluster0.gzckq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
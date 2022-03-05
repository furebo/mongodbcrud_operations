import mongoose from 'mongoose';

const blogShema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }

})

export default new mongoose.model('Blogs',blogShema);
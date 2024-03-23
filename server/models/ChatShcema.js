import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
    Sender:{
        type:String
    }, 
    Receiver: {
        type:String
    },
    TimeStamp:{
        type:Date,
        default:Date.now
    }
    
       

})

const User = mongoose.model('chatapp', ChatSchema);


export default User;



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

export default mongoose.model('Chat', ChatSchema);
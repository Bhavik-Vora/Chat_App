import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    content:String,
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true,
      },
      chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat",
        required:true,
      },
      attachments:[{
        public_id: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
          },}
      ]
},{timestamps:true});

export const Message = mongoose.model("Message", messageSchema);    
export default Message;
import {Schema,model} from 'mongoose'

const userSchema=Schema(
    {
    username:{
        type:String,
        required:true,
        trim:true
    },
   useremail:{
        type:String,
        required:true,
        unique:true
    },
    userpassword:{
        type:String,
        required:true

    },
    bookings:[{
        type:Schema.Types.ObjectId,
        ref:'Booking'
    }]


}

)
const User=model("User",userSchema)
export default User;
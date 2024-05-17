import {Schema,model} from 'mongoose';

const ProfileSchema=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"

    },
    host:{
        type:Schema.Types.ObjectId,
        ref:"Host"
    },
    username:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        trim:true
    },
    phoneNumber:{
        type:Number
    },
    address:{
        type:String
    },
    age:{
        type:Number
    },
    profileimage:{
        type:String,
        trim:true
    }
})
const Profile=model('Profile',ProfileSchema)
export default Profile;
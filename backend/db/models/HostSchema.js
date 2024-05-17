import {Schema,model} from 'mongoose';


const HostSchema=({
    hostname:{
        type:String,
        required:true
    },
    image:{
        type:String,
        // required:true,
        trim:true

    },
    hostemail:{
        type:String,
        required:true
    },
    hostpassword:{
        type:String,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    homestay:[{
        type:Schema.Types.ObjectId,
        ref:'HomeStay'
    }]
    
}
)
const Host=model('Host',HostSchema)
export default Host;
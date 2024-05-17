import {Schema,model} from 'mongoose';

const ReviewSchema=({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    homestay:{
        type:Schema.Types.ObjectId,
        ref:'HomeStay'
    },
    rating:{
        type:Number,
        
    },
    comments:{
        type:String,
        
    },
    reviewText:{
        type:String,
        require:true

    }

}
)
const Review=model('Review',ReviewSchema)
export default Review;
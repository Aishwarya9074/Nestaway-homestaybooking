import mongoose from "mongoose"

mongoose.connect('mongodb://0.0.0.0:27017/NestawayDB').then(()=>{
    console.log('NestawayDB connected')
})
.catch(e=>{
    console.log(e.message)

})
export default mongoose;
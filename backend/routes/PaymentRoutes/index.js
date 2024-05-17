import express from 'express'
import Payment from '../../db/models/PaymentSchema.js';

const router=express.Router()

router.post('/:id', async (req, res) => {
    try {
        const {id } = req.params;
        const { amount, currency, paymentMethod, transactionId, metadata } = req.body;

        // Check if the provided transactionId is valid
        if (!['pending', 'completed', 'failed'].includes(transactionId)) {
            return res.status(400).json({ message: 'Invalid transactionId.' });
        }

        // Create a new payment object
        const newPayment = new Payment({
            userId:id,
            amount,
            currency,
            paymentMethod,
            transactionId,
            metadata
        });

        // Save the new payment to the database
        const savedPayment = await newPayment.save();

        // Return the saved payment as a response
        return res.status(201).json(savedPayment);
    } catch (error) {
        console.error('Error while processing payment:', error);
        return res.status(500).json({ message: 'Internal server error.' });
    }
});
router.get('/:id',async(req,res)=>{
    const {id}=req.params
    const payment=await Payment.find({hostId:id})
    return res.status(200).json(payment)
})
router.patch('/:paymentId',async(req,res)=>{
    const{paymentId}=req.params
    const updatePayment=await Payment.findByIdAndUpdate(paymentId,req.body,{new:true})
    if(!updatePayment){
        return res.status(404).json({message:'payment not found'})
    }
    return res.status(200).json(updatePayment)
})

router.delete('/:paymentId',async(req,res)=>{
    const {paymentId}=req.params
    const dltPayment=await Payment.findByIdAndDelete(paymentId)
    if(!dltPayment){
        return res.status(404).json({message:'payment not found'})
    }
    return res.status(200).json({message:'payment deleted successfully'})
})

export default router;
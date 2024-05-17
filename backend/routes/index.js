import express from 'express'
import HostRoutes from "./HostRoutes/index.js";
import UserRoutes from "./UserRoutes/index.js";
import HomestayRoutes from "./HomestayRoutes/index.js";
import imageRoutes from './imageRoutes/index.js';
import BookingRoutes from "./BookingRoutes/index.js";
import ReviewRoutes from "./ReviewRoutes/index.js"
import RoomRoutes from "./RoomRoutes/index.js"
import ProfileRoutes from "./ProfileRoutes/index.js";
import AdminRoutes from "./AdminRoutes/index.js"
import PaymentRoutes from "./PaymentRoutes/index.js"


const router=express.Router()


router.use('/host', HostRoutes)
router.use('/user',UserRoutes)
router.use('/homestay',HomestayRoutes)
router.use('/images',imageRoutes)
router.use('/booking',BookingRoutes)
router.use('/review',ReviewRoutes)
router.use('/rooms',RoomRoutes)
router.use('/profile',ProfileRoutes)
router.use('/admin',AdminRoutes)
router.use('/payment',PaymentRoutes)







export default router;
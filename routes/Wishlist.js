import express from 'express';
import { addwishlistController, mywishlistController, removeController } from '../controllers/wishlistController.js';
const router = express.Router();
import requiredLogin from "../middleware/requiredLogin.js";
import Wishlist from "../models/Wishlist.js";
export { addwishlistController, mywishlistController, removeController };

router.post("/addwishlist", requiredLogin, addwishlistController);

router.get("/mywishlist", requiredLogin, mywishlistController);

router.put("/removewishlist", removeController);


export default router;
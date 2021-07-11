import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
const router = express.Router();
import mongoose from "mongoose";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import JWT_SECRET from '../secret.js';
import requireLogin from "../middleware/requiredLogin.js";
import { signupController, signinController } from "../controllers/authController.js";


router.get("/protected", requireLogin, (req, res) => {
    res.send("Hello user to protected routes")
})


router.post("/signup", signupController);


router.post("/signin", signinController);

export default router;
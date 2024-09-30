import express from 'express';
import { test} from '../controllers/userController.js';
import { verifyToken } from '../utils/verifyUser.js';
import { signin, signup } from '../controllers/authController.js';

const router = express.Router(); 



export default router;

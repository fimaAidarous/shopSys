import express from 'express';
import { test} from '../controllers/usercontroller.js';
import { verifyToken } from '../utils/verifyUser.js';


const router = express.Router(); 

router.get('/test', test);

export default router;

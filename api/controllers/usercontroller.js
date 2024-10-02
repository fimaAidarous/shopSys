import bcryptjs from 'bcryptjs';
import User from '../models/User.js';
import { errorHandler } from '../utils/error.js';

export const test = (req,res) => {
    res.json({
        message:'Api Route is Working',
    });
};

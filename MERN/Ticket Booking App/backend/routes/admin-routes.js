import express from 'express';
import { getAdminById, getAdmins } from '../controllers/admin-controllers.js';

let adminRouter = express.Router();

adminRouter.post('/signup');
adminRouter.post('/login');
adminRouter.get('/', getAdmins);
adminRouter.get('/:id', getAdminById);

export default adminRouter; 

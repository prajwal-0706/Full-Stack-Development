import express from 'express';
import {
  addAdmin,
  getAdminById,
  getAdmins,
  loginAdmin,
} from '../controllers/admin-controllers.js';

let adminRouter = express.Router();

adminRouter.post('/signup', addAdmin);
adminRouter.post('/login', loginAdmin);
adminRouter.get('/', getAdmins);
adminRouter.get('/:id', getAdminById);

export default adminRouter;

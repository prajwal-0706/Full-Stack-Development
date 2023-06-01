import express from 'express';
import { getUserById, getUsers } from '../controllers/user-controllers.js';

let userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/signup');
userRouter.post('/login');

export default userRouter;

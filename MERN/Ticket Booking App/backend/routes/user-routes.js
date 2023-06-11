import express from 'express';
import {
  addUser,
  getUserById,
  getUsers,
  loginUser,
} from '../controllers/user-controllers.js';

let userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/signup', addUser);
userRouter.post('/login', loginUser);

export default userRouter;

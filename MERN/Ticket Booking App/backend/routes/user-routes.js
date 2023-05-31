import express from 'express';

let userRouter = express.Router();

userRouter.get('/');
userRouter.get('/:id');
userRouter.post('/signup');
userRouter.post('/login');

export default userRouter;

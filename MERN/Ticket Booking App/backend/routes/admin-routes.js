import express from 'express';

let adminRouter = express.Router();

adminRouter.post('/signup');
adminRouter.post('/login');
adminRouter.get('/');
adminRouter.get('/:id');

export default adminRouter;

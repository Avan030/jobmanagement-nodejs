import { Router } from 'express';
import { authRouter } from './auth';
import { userRouter } from './user';
import { jobRouter } from './job';

const v1Router = Router();

v1Router.use('/auth', authRouter);
v1Router.use('/user', userRouter);
v1Router.use('/jobs', jobRouter);


export { v1Router };

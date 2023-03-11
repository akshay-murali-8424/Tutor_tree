import userRouter from './user'
import adminRouter from './admin';
import { Application } from 'express';
import authRouter from './auth';
import { RedisClient } from '../../../app';
import userAuthMiddleware from '../middlewares/userAuthMiddleware';
import coursesRouter from './courses';


const routes=(app:Application,redisClient:RedisClient)=>{
  app.use('/api/auth', authRouter());
  app.use('/api/user',userAuthMiddleware,userRouter(redisClient));
  app.use('/api/admin', adminRouter());
  app.use('/api/courses',userAuthMiddleware,coursesRouter(redisClient));
}

export default routes


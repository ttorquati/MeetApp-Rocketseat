import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import MeetupController from './app/controllers/MeetupController';
import SubscriptionController from './app/controllers/SubscriptionController';
import OwnerController from './app/controllers/OwnerController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/meetups', MeetupController.index);
routes.get('/meetups/:id', MeetupController.findOne);
routes.get('/subscriptions', SubscriptionController.index);
routes.get('/owner', OwnerController.index);

routes.post('/files', upload.single('file'), FileController.store);
routes.post('/meetups', MeetupController.store);
routes.post('/meetups/:meetupId/subscriptions', SubscriptionController.store);

routes.put('/users', UserController.update);
routes.put('/meetups/:id', MeetupController.update);

routes.delete('/meetups/:id', MeetupController.delete);
routes.delete('/subscriptions/:id', SubscriptionController.delete);

export default routes;

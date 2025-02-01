import express from 'express';
const router = express.Router();
import { getNotifications } from '../controllers/notification.controller.js';
import { isProtected } from '../middlewares/auth.middleware.js';

router.route('/').get(isProtected, getNotifications);

router.route('/:id').get(isProtected, deleteNotification);

export default router
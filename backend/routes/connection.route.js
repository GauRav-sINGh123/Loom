import express from "express";
const router=express.Router();
import {isProtected} from "../middlewares/auth.middleware.js";
import {sendConnectionRequest} from "../controllers/connection.controller.js";

router.route('/send_request/:id').post(isProtected,sendConnectionRequest);

export default router;
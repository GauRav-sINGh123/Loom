import express from "express";
const router=express.Router();
import {isProtected} from "../middlewares/auth.middleware.js";
import {sendConnectionRequest,acceptConnectionRequest} from "../controllers/connection.controller.js";

router.route('/send_request/:userId').post(isProtected,sendConnectionRequest);

router.route('/accept_request/:requestId').post(isProtected,acceptConnectionRequest);

export default router;
import express from "express";
const router=express.Router();
import {isProtected} from "../middlewares/auth.middleware.js";
import {sendConnectionRequest,acceptConnectionRequest, rejectConnectionRequest,getAllConnectionRequests,getAllConnections,removeConnection } from "../controllers/connection.controller.js";

router.route('/send_request/:userId').post(isProtected,sendConnectionRequest);

router.route('/accept_request/:requestId').post(isProtected,acceptConnectionRequest);

router.route('/reject_request/:requestId').put(isProtected,rejectConnectionRequest);

router.route('/requests').get(isProtected,getAllConnectionRequests);

//User Connection
router.route('/connections/:connectionId').get(isProtected,getAllConnections);

router.route('/connections').delete(isProtected,removeConnection);

router.route('/status/:connectionId').get(isProtected,getConnectionStatus);


export default router;
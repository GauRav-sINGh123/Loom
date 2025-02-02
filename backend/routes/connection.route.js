import express from "express";
const router=express.Router();
import {isProtected} from "../middlewares/auth.middleware.js";
import {sendConnectionRequest,acceptConnectionRequest, rejectConnectionRequest,getAllConnectionRequests,getAllConnections} from "../controllers/connection.controller.js";

router.route('/send_request/:userId').post(isProtected,sendConnectionRequest);

router.route('/accept_request/:requestId').post(isProtected,acceptConnectionRequest);

router.route('/reject_request/:requestId').put(isProtected,rejectConnectionRequest);

router.route('/getAllConnectionRequests').get(isProtected,getAllConnectionRequests);

//User Connection
router.route('/connections').get(isProtected,getAllConnections);



export default router;
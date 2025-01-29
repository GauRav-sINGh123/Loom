import express from "express";
const router = express.Router();
import { signup,signin,logout,getCurrentUser} from "../controllers/auth.controller.js";
import { isProtected } from "../middlewares/auth.middleware.js";

router.route('/signup').post(signup);

router.route('/signin').post(signin);

router.route('/logout').post(logout);

router.route('/current_user').get(isProtected,getCurrentUser);

export default router;
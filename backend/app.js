import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config()

const app=express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
    methods: ["GET", "POST", "PUT", "DELETE"], // ✅ Allow all necessary methods
    allowedHeaders: ["Content-Type", "Authorization"], // ✅ Allow headers
}));

app.use(express.json({limit:'16kb'}));
app.use(express.urlencoded({extended:true,limit:'16kb'}));
app.use(express.static('public'));
app.use(cookieParser());

// routes 
import AuthRoute from './routes/auth.route.js';
import UserRoute from './routes/user.route.js';
import PostRoute from './routes/post.route.js';

app.use('/api/auth',AuthRoute);
app.use('/api/users',UserRoute);
app.use('/api/posts',PostRoute);
 



export {app}
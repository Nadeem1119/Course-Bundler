import jwt from "jsonwebtoken";
import ErrorHandler from "../utils/ErrorHandler.js";
import { catchAsyncError } from "./catchAsyncError.js";
import { User } from "../models/User.js";


export const isAuthenticated= catchAsyncError(async (req,res,next)=>{
 const {token} =req.cookies;
 if(!token) return next(new ErrorHandler("Not Logged In",401))
 const decoded=jwt.verify(token,process.env.JWT_SECRET);
 req.user=await User.findById(decoded._id);
 next();
})
export const authorizeAdmin=(req,res,next)=>{
 if(req.user.role!=="admin") return next(new ErrorHandler(`${req.user.role} is not allowed to access this resource`,403));
 
 next();
}
export const authorizeSubscribers=(req,res,next)=>{
  if(req.user.subscription.status 
    !=="active" && req.user.role!=="admin") return next(new ErrorHandler(`Only Subscribers can access this resource`,403));
  
  next();
 }
 export const corsErrors=(req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://course-bundler-afxt.onrender.com/api/v1/forgetpassword");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
}
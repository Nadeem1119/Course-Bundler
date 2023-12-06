const ErrorMiddleware=(err,req,res,next)=>{
  err.statusCode= err.statusCode || 500
  err.meassage=err.meassage || "Internal Server Error"
res.status(err.statusCode).json({
  success:false,
  mesaage:err.message,
})
}
export default ErrorMiddleware;
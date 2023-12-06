import express from "express";
import { addToPlaylist, changePassword, deleteMyProfile, deleteUser, forgetPassword, getAllUsers, getMyProfile, login, logout, register, removeFromPlaylist, resetPassword, updateProfile, updateProfilePicture, updateRole } from "../controllers/userController.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js"

 const router=express.Router();

 // To Register a new user
 router.route("/register").post(singleUpload,register);

 //Login
 router.route("/login").post(login);

//Logout
 router.route("/logout").get(logout);

 //Get My Profile
 router.route("/me").get(isAuthenticated,getMyProfile);

 //Delete My Profile
 router.route("/me").delete(isAuthenticated,deleteMyProfile);

//Change Password
router.route("/changepassword").put(isAuthenticated,changePassword);

 //Update Profile
 router.route("/updateprofile").put(isAuthenticated,updateProfile);

 //Update Profile Picture
 router.route("/updateprofilepicture").put(isAuthenticated,singleUpload,updateProfilePicture);

 //forget password
 router.route("/forgetpassword").post(forgetPassword);

 //Reset password
 router.route("/resetpassword/:token").put(resetPassword);

 // Add To Playlist
 router.route("/addtoplaylist").post(isAuthenticated,addToPlaylist);

  // Remove from Playlist
  router.route("/removefromplaylist").delete(isAuthenticated,removeFromPlaylist);

  //Admin Routes
  router.route("/admin/users").get(isAuthenticated,authorizeAdmin,getAllUsers)

  router.route("/admin/user/:id").put(isAuthenticated,authorizeAdmin,updateRole).delete(isAuthenticated,authorizeAdmin,deleteUser)








 export default router; 
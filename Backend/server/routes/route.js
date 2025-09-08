// const express = require("express");
// const router = express.Router();

// const {verifyOtp, sendOtp, createUser,loginUser,getAllUser,getUserById,updateUserById,deleteUserById} = require("../api/user/userController");



// const upload = require("../middleware/multer");
// const auth = require("../middleware/auth");

// // User routes
// router.post("/users", upload.fields([
//   { name: "image", maxCount: 2 },
//   { name: "pancard", maxCount: 2 },
//   { name: "aadharcard", maxCount: 2 },
// ]), createUser);

// router.post("/auth/login", loginUser);
// router.post("/getalluser",  getAllUser);
// router.get("/users/:id", auth, getUserById);
// router.put("/users/:id", auth, updateUserById);
// router.delete("/users/:id", auth, deleteUserById);
// router.post("/users", deleteUserById);

// // Student routes


// // // // Post routes
// // router.post("/posts", auth, createPost);
// // router.get("/posts", getAllPost);

// // OTP routes
// router.post("/sendotp", sendOtp);
// router.post("/verifyotp", verifyOtp);

// module.exports = router;

const express = require("express");
const router = express.Router();

const {
  verifyOtp,
  sendOtp,
  createUser,
  loginUser,
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../api/user/userController");
const {createContact} = require("../api/contact/createContact")

const upload = require("../middleware/multer");
const auth = require("../middleware/auth");

// User routes
router.post(
  "/users",
  upload.fields([
    { name: "image", maxCount: 2 },
    { name: "pancard", maxCount: 2 },
    { name: "addharcard", maxCount: 2 },
  ]),
  createUser
);

router.get("/users", auth, getAllUser);
router.get("/users/:id", auth, getUserById);
router.put("/users/:id", auth, updateUserById);
router.delete("/users/:id", auth, deleteUserById);

// Auth routes
router.post("/auth/login", loginUser);
// router.post("/users",createUser)

// OTP routes
router.post("/sendotp", sendOtp)
router.post("/verifyotp", verifyOtp);
router.post("/createcontact",createContact)

module.exports = router;
const express = require("express");
const accesscontroller = require("../../controllers/access.controller.js");
const router = express.Router();
const { asyncHandler } = require("../../auth/checkAuth.js");
// signup
router.post("/shop/signup", asyncHandler(accesscontroller.signUp));
module.exports = router;

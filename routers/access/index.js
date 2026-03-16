const express = require("express");
const accesscontroller = require("../../controllers/access.controller.js");
const router = express.Router();

// signup
router.post("/shop/signup", accesscontroller.signUp);
module.exports = router;

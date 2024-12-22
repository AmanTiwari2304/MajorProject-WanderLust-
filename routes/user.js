const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userConstroller = require("../controllers/user.js");

//SignUp

router
    .route("/signup")
    .get(userConstroller.renderSignup)
    .post(wrapAsync(userConstroller.signup))

//Login

router
    .route("/login")
    .get(userConstroller.renderLoginForm)
    .post(
        saveRedirectUrl,
        passport.authenticate("local",{
            failureRedirect: "/login",
            failureFlash: true,
        }), 
        userConstroller.login)

//Logout

router.get("/logout", userConstroller.logout)

module.exports = router;
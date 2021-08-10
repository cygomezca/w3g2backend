const {User} = require('../models/user');
const bcrypt = require('bcrypt.js')
const jwt = require('jsonwebtoken');
const { request } = require('express');

import passport from "passport";

export const renderSignUpForm = (req, res) => res.render("user/signup");

export const singup = async (req, res) => {
    let errors = [];
    const { nombre,  correo, password, confirm_password } = req.body;
    if (password != confirm_password) {
    errors.push({ text: "Passwords do not match." });
    }
    if (password.length < 4) {
    errors.push({ text: "Passwords must be at least 4 characters." });
    }
    if (errors.length > 0) {
    res.render("user/signup", {
        errors,
        nombre,
        correo,
        password,
        confirm_password,
    });
    } else {
    // Look for email coincidence
    const correoUser = await User.findOne({ email: email });
    if (correoUser) {
        req.flash("error_msg", "The Email is already in use.");
        res.redirect("/user/signup");
    } else {
      // Saving a New User
        const newUser = new User({ nombre, correo, password });
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        req.flash("success_msg", "You are registered.");
        res.redirect("/user/signin");
    }
    }
};

export const renderSigninForm = (req, res) => res.render("user/signin");

export const signin = passport.authenticate("local", {
  successRedirect: "/plato",
  failureRedirect: "/user/signin",
  failureFlash: true,
});

export const logout = (req, res) => {
  req.logout();
  req.flash("success_msg", "You are logged out now.");
  res.redirect("/user/signin");
};

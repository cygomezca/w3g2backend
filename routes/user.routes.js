const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/user/signin',(req,res) =>{
    res.reder('user/signin');
});

router.get('/user/signup',(req,res) =>{
    res.reder('users/signup');
});

router.post('/user/signup', (req, res)=>{
    const {nombre, correo, password, confirm_password} = req.body;
    const errors = [];
    if (nombre.lenght <=0){
        errors.push({text:'Por favor inserte su nombre'});
    }
    if (password != confirm_password){
        errors.push({text:'Las contraseñas no coinciden'});
    }
    if ( password.length > 4){
        errors.push({text: 'La contraseña tiene que ser mayor de 4 caracteres'});
    }
    if (errors.lenght> 0 ){
        res.render('user/signup', {errors, nombre, correo, password, confirm_password});
    } else {
        const correoUser = User.findOne({correo: correo});
        if(correoUser){
            req.flash('error_msg','Este correo ya esta en uso');
            res.redirect('/user/signup');
        }
        const newUser = new User({nombre,  correo, password, confirm_password});
        newUser.password = newUser.encryptPassword(password);
        newUser.save();
        req.flash('success_msg', 'Usted ya esta registrado');
        res.redirect('/user/signin');
    }
});

module.exports = router;

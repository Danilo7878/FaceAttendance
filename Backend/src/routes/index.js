const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();


const User = require('../models/User');
const Verify = require('../models/Verify');
const Entry = require('../models/Entry');

router.post('/SignUp', (req, res) => {
    User.findOne({email: req.body.email})
    .exec()
    .then(user => {
        if(user){
            return res.status(409).json({message: 'this email is already used'});
        }else{   
            bcrypt.hash(req.body.password, 10, (err, hash) => {    
                if (err) { res.status(500).json({error: err});
                }else{ 
                    const user = new User({
                        _id: new mongoose.Types.ObjectId(),
                        email: req.body.email,
                        password: hash,
                        firstname: req.body.firstname,
                        lastname: req.body.lastname
                    })
                    user.save().then(result => {
                        res.status(201).json({
                            message: 'User has been created',
                        });
                    })
                    .catch(err => {
                        res.status(500).json({
                            error: err
                        });
                    })
                }
            })
        }
    })
    .catch(err =>{
        error: err
    });
});

router.post('/Login', (req,res) => {
    User.findOne({email: req.body.email})
    .then(user => {
        if (!user) return res.status(401).json({mensaje: 'Invalid Email or Password'});
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if(err) {
                return res.status(401).json({
                    message: 'Invalid Email or Password'
                });
            }
            if(result) {
                const token = jwt.sign({ _id: user._id}, process.env.PASSWORD_SALT, {expiresIn: "2h"});
                return res.status(200).json({token: token});
            }
            return res.status(401).json({
                message: 'Invalid Email or Password'
            });
        });
    })
    .catch(err => {
        res.status(500).json({ error: err});
    });
});

router.get('/GetUsers', (req,res) => {
    User.find()
    .then(users => {
        return res.status(200).json({users: users});
    })
    .catch(err => {
        res.status(500).json({ error: err});
    });
})

//Ruta para obtener el listado de un catedr??tico espec??fico, de una clase espec??fica en una fecha espec??fica
router.get('/GetList', (req,res) => {
    Entry.find()
    .then(entry => {
        return res.status(200).json({entry: entry});
    })
    .catch(err => {
        res.status(500).json({ error: err});
    });
})

router.get('/GetList/:date', (req,res) => {
    let date = req.params.date;
    Entry.find({date: date})
    .then(entry => {
        return res.status(200).json({entry: entry});
    })
    .catch(err => {
        res.status(500).json({ error: err});
    });
})

router.get('/GetListByAlumn/:alumn', (req,res) => {
    let alumn = req.params.alumn;
    Entry.find({name: alumn})
    .then(entry => {
        return res.status(200).json({entry: entry});
    })
    .catch(err => {
        res.status(500).json({ error: err});
    });
})

module.exports = router;
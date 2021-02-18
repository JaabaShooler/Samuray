const jwt = require('jsonwebtoken')
const {jwtSecret} = require('../../config/app')
const bcrypt = require('bcrypt');

const User = require('../models/user');

const generateAccessToken = (payload) => jwt.sign({payload}, jwtSecret, {expiresIn: "1h"})



class UsersController{
    async me(req, res){
        try{
            await User.findOne({id: req.params.id})
                .select('-password')
                .exec()
                .then(user => {user.follow === null ? user.follow = [] : console.log(""); return res.status(203).json(user);})
                .catch(err => res.status(500).json({message: "error", err: err}))
        }catch (e){
            console.log(e);
            res.status(500).json({message: "error",success: false,  err: e})
        }
    }

    async getAll(req, res){
        try{
            await User.find()
                .select('-password')
                .exec()
                .then(users => res.status(203).json({users, totalCount: users.length}))
                .catch(err => res.status(500).json({message: "error", err: err}))
        }catch (e){
            console.log(e);
            res.status(500).json({message: "error",success: false,  err: e})
        }
    }
    async create(req, res){
        try{
            const hashPassword = bcrypt.hashSync(req.body.password, 7);
            const data = {...req.body};
            data.password = hashPassword
            const candidate = await User.findOne({id: req.body.id});
            if (candidate) {return res.status(400).json({message: "This user already exists",success: false})}
            const user = new User(data);
            await user.save();
            return res.status(201).json({data: user, success: true})
        }catch (e){
            console.log(e);
            res.status(500).json({message: "error",success: false,  err: e})
        }
    }
    async update(req, res){
        try{
            const candidate = await User.findOne({id: req.params.id});
            if (!candidate) {return res.status(400).json({message: "User does not exist",success: false})}
            await User.findOneAndUpdate({id: req.params.id}, req.body);
            return res.status(200).json({message: 'Successful', success: true})
        }catch (e){
            console.log(e);
            res.status(500).json({message: "error",success: false,  err: e})
        }
    }
    async remove(req, res){
        try{
            const candidate = await User.findOne({id: req.params.id});
            if (!candidate) {return res.status(400).json({message: "User does not exist",success: false})}
            await User.deleteOne({id: req.params.id})
            return res.status(200).json({message: 'Successful', success: true})
        }catch (e){
            console.log(e);
            res.status(500).json({message: "error",success: false,  err: e})
        }
    }
    async login(req, res){
        try{
            const {nickname, password} = req.body;
            console.log(password)
            const user = await User.findOne({nickname});
            if (!user) {return res.status(400).json({message: "User does not exist", success: false})}
            console.log(user.password);
            const validatePassword = bcrypt.compareSync(password, user.password);
            if(!validatePassword){
                return res.status(400).json({message: 'Incorrect password'})
            }
            return res.status(200).json({token: generateAccessToken({id: user.id, nickname: user.nickname})})
        }catch (e){
            console.log(e);
            res.status(500).json({message: "error",success: false,  err: e})
        }
    }
    async singIn(req, res){
        try{
            const {nickname, password} = req.body;
            const user = await User.findOne({nickname});
            if (!user) {return res.status(400).json({message: "User does not exist", success: false})}
            const validatePassword = bcrypt.compareSync(password, user.password);
            if(!validatePassword){
                return res.status(400).json({message: 'Incorrect password'})
            }
            return res.status(200).json({token: generateAccessToken(user.id)})
        }catch (e){
            console.log(e);
            res.status(500).json({message: "error",success: false,  err: e})
        }
    }
    async follow(req, res){
        try{
            const {follow} = req.body;
            console.log(follow);
            const candidate = await User.findOne({id: req.params.id});
            if (!candidate) {return res.status(400).json({message: "User does not exist",success: false})}
            await User.findOneAndUpdate({id: req.params.id}, {follow});
            return res.status(200).json({message: 'Successful', success: true})
        }catch (e){
            console.log(e);
            res.status(500).json({message: "error",success: false,  err: e})
        }
    }
    async unfollow(req, res){
        try{
            const {unfollow} = req.body;
            const candidate = await User.findOne({id: req.params.id});
            if (!candidate) {return res.status(400).json({message: "User does not exist",success: false})}
            await User.findOneAndUpdate({id: req.params.id}, unfollow);
            return res.status(200).json({message: 'Successful', success: true})
        }catch (e){
            console.log(e);
            res.status(500).json({message: "error",success: false,  err: e})
        }
    }
}


module.exports = new UsersController()
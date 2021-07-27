const User = require("../../Model/models/user.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { createJWT } = require('./autentication');

const map = require("express").Router();

map.get("/", async (req, res) => {
    try {
        const users = await User.find()/* .select({ password: 0, __v: 0 }) */;
        res.status(200).send(users);
    } catch (e) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});

/* New Users */

map.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const pass = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: pass });
        await user.save();

        res.status(200).send({
            status: true,
            message: "User Created",
        });
    } catch (error) {
        res.status(302).send({ 
            status: "failed", 
            message: "Not Created Your Profile" 
        });
    }
});

/* Login Users */

map.post('/login', async(req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username }).select('+password');
        if(!user){
            res.status(401).send({msg: 'Username not found'})
        }

        const isMatch = await user.matchPassword(password);

        if(!isMatch){
            res.status(300).send({msg: 'Password not Matches'})
        }
        let access_token = createJWT(user.email, user._id, '1h');
        jwt.verify(access_token, process.env.JWT_SECRET, (err, decode) => {
            if(err){
                res.send({err})
            }
            if(decode){
                const model = {
                    username: user.username,
                    email: user.email,
                    _id: user._id
                }
                res.status(200).send({ access: true, token: access_token, content: model });
            }
        });
    } catch (error) {
        res.status(405).send({ msg: "Unknown Error", err: error });
    }

})

map.get("/:_id/tasks", async (req, res) => {
    try {
        const allUserResources = await User.findById(req.params._id).populate(
            "tasks"
        );
        res.send(allUserResources);
    } catch (error) {
        res.send({ msg: "Not Allowed Task For This User" });
    }
});

module.exports = map;

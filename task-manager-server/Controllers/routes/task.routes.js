const Task = require('../../Model/models/task.model');
const User = require('../../Model/models/user.model');
const { isAuthenticated } = require('./../../Middlewares/check-auth')
const map = require('express').Router();

map.get('/', isAuthenticated, async (req, res) => {
    try {
        const userTasks = await User.findById(req.user._id).populate({
            path: 'tasks',
            select: {
                __v: 0
            }
        });       
        res.status(200).send(userTasks.tasks)
    } catch (error) {
        console.log(error)
        res.status(400).send({msg: 'Data Not Allowed', tip: 'Not Retry'})
    }
})

map.post('/add', isAuthenticated, async (req, res) => {
    try {
        const { title, body, comment } = req.body;
        const user = await User.findById(req.user._id);
        const newTask = new Task({ 
            title, body, comment
        })
        newTask.owner = user; await newTask.save(); 
        user.tasks.push(newTask); await user.save();
        res.send({ status: "ok", msg: "your task has been added successfully" });

    } catch (error) {
        res.status(500).send({status: 'fail', msg: 'Error Internal Server'} )
    }
})

module.exports = map

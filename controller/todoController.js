
const { findByIdAndUpdate } = require("../models/todoModel")
const users = require("../models/todoModel")

const createTodo = async(req, res)=>{
    const {title, body} = req.body

    try {
        if(!title || !body){
            res.status(401).json({msg: "Please provide the nessces item"})
        }
        const todo =  await users.create({
            title,
            body
               })
               res.status(200).json({data: todo, msg:" todo created"})
               console.log("created");
    } catch (error) {
        console.log({error, msg: "Error in creatng todo"});
    }
}

const getAllTodo = async(req, res)=>{
    // const {title, body, completed} = res.params
    try {
        // const allTodo = await users.find({title, body, completed})

        const allTodo = await users.find()
        res.status(200).json({allTodo, msg: "singleuser"})
    } catch (error) {
        console.log(error);
    }
}

const getSingleTodo = async(req, res)=>{
    const {id} = req.params
    try {
        const singletodo = await users.findById(id)
        res.status(200).json({singletodo, msg: "single todo created"})
    } catch (error) {
        console.log(error);
    }
}
const deleteTodo = async(req, res)=>{
    const {id} = req.params

    try{
        const singletodo = await users.findById(id)
        // res.status(200).json({ msg: "single todo created"})

        const delTodo = await users.findByIdAndDelete(id)
        res.status(201).json({
            msg: "successful deletion ",
            delTodo
        })

    }catch(err) {
        console.log(err);
    }

   
}

const updateTodo = async(req, res)=>{
    const {id} = req.params
    try {
        const existTodo = await users.findById(id)
        const updateTodo = await findByIdAndUpdate(existTodo, req.body, {new: true,  runValidators: true})
        res.status(202).json({data: updateTodo})
    } catch (error) {
        
    }
}
//overwirte






module.exports = {createTodo, getAllTodo, getSingleTodo, deleteTodo, updateTodo}
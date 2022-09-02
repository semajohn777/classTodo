
const { findByIdAndUpdate } = require("../models/todoModel")
const users = require("../models/todoModel")

const createTodo = async(req, res)=>{
    const {title, body} = req.body

    try {
        if(!title || !body){
            res.status(401).json({msg: "Please provide the neccessary item"})
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
        // if(singletodo) {
        //  return res.status(200).json({ msg: "single todo created"})
        // }
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
    const {title, body} = req.body
    try {
        if(!title || !body){
            res.status(401).json({msg: "Please provide all input before updating"})
        }
        const existTodo = await users.findById(id)
        if(existTodo) {
            const updateTodo = await users.findByIdAndUpdate(existTodo, req.body, {new: true, runValidators:true})

            const allOfThem = await users.find()
            return res.status(201).json({ allOfThem })
        }

       return res.status(202).json()
    } catch (error) {
        console.log(error);
    }
}
//overwirte


// const updateTodo = async (req, res)=>{
//     const { id } = req.params
//     const { title, body } = req.body

//     try {
//         const data = await users.findById(id)

//         if(data){
//             if(!title || !body){
//                 return res.status(404).json({ msg:"input necessary details"})
//             }
//             const Updating = await users.findByIdAndUpdate(data, { title, body }, {new: true, runValidators: true, 
//                 //overwrite: true
//             })
//             const allOfThem = await users.find()
//             return res.status(201).json({ allOfThem })
//         }
//         return res.json({ msg: 'Stuff not Found'})
//     } catch (error) {
//         console.log(error);
//     }
// }







module.exports = {createTodo, getAllTodo, getSingleTodo, deleteTodo, updateTodo}
// const { Router } = require("express")
const router = require("express").Router()
const {createTodo, deleteTodo, getSingleTodo, getAllTodo, updateTodo} = require("../controller/todoController")

router.post("/todo", createTodo)
router.delete("/todo/:id", deleteTodo)
// router.route("/todo").get(getSingleTodo).post(createTodo) this or line 5 and 6
router.get("/todo/:id", getSingleTodo)
router.get("/todo", getAllTodo)
router.patch("/todo/:id", updateTodo)

module.exports = router 
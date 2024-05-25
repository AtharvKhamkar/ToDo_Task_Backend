import { Router } from "express";
import { addTodo, deleteTodo, getSpecificTodo, getTodos, updateTodo, } from "../controllers/todo.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router()

router.route("/tasks").post(upload.none(), addTodo);
router.route("/tasks").get(getTodos)
router.route("/tasks/:id").get(getSpecificTodo)
router.route("/tasks/:id").put(upload.none(),updateTodo)
router.route("/tasks/:id").delete(deleteTodo)

export default router
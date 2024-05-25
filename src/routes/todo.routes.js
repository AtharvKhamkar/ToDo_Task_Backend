import { Router } from "express";
import { addTodo, deleteTodo, getSpecificTodo, getTodos, markComplete, updateTodo, } from "../controllers/todo.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router()

router.route("/tasks").post(upload.none(), addTodo);
router.route("/tasks").get(getTodos)
router.route("/tasks/:id").get(getSpecificTodo)
router.route("/tasks/:id").put(upload.none(),updateTodo)
router.route("/tasks/:id").delete(deleteTodo)
router.route("/tasks/done/:id").put(upload.none(),markComplete)

export default router
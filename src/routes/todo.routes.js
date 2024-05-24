import { Router } from "express";
import { addTodo } from "../controllers/todo.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router()

router.route("/tasks").post(upload.none(),addTodo);

export default router
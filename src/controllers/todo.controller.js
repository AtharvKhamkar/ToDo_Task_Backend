import { Todo } from "../models/todo.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const addTodo = asyncHandler(async (req, res) => {
    const { title, description, due } = req.body;

    console.log(title);

    console.log(description);

    console.log(due);

    const addedTodo = await Todo.create({
        title,
        description,
        due
    })

    return res.status(200)
        .json(
            new ApiResponse(
                200,
                addedTodo,
                "Todo added successfully"
        )
    )
})

export { addTodo };

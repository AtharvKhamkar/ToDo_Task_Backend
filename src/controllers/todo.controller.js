import { Todo } from "../models/todo.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const addTodo = asyncHandler(async (req, res) => {
    const { title, description, due } = req.body;

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

const getTodos = asyncHandler(async (req, res) => {
    
    const allTodos = await Todo.find({});

    return res.status(200)
        .json(
            new ApiResponse(
                200,
                allTodos,
                "All todos fetched success fully"
        )
    )
})

const getSpecificTodo = asyncHandler(async (req, res) => {
    const id = req.params?.id;

    const todo = await Todo.findById({
        _id:id
    })

    return res.status(200)
        .json(
            new ApiResponse(
                200,
                todo,
                "Successfully fetched todo"
        )
    )
})

const updateTodo = asyncHandler(async (req, res) => {
    

    const updatedTodo = await Todo.findByIdAndUpdate(
        req.params?.id,
        {
            $set: {
                title: req.body?.title,
                description: req.body?.description,
                due:req.body?.due
            }
        },
        {
            new:true
        }
    ).select("-createdAt")

    return res.status(200)
        .json(
            new ApiResponse(
                200,
                updatedTodo,
                "Successfully updated Todo"
        )
    )
})

const deleteTodo = asyncHandler(async (req, res) => {
    const id = req.params?.id

    const todo = await Todo.findByIdAndDelete({
        _id:id
    })

    return res.status(200)
        .json(
            new ApiResponse(
                200,
                {},
                "Successfully deleted todo"
        )
    )
})

const markComplete = asyncHandler(async (req, res) => {
    await Todo.findByIdAndUpdate(
        req.params?.id,
        {
            $set: {
                status:"Done"
            }
        },
        {
            new:true
        }
    )

    return res.status(200)
        .json(
            new ApiResponse(
                200,
                {},
                "Todo completed"
        )
    )
})
export { addTodo, deleteTodo, getSpecificTodo, getTodos, markComplete, updateTodo };


import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim:true
    },
    status: {
        type: String,
        default: "Pending",
        enum: [
            "Pending",
            "Ongoing",
            "Done"
        ]
    },
    due: {
        type: Date,
        required:true
    }

}, { timestamps: true })

export const Todo = mongoose.model("Todo", todoSchema);
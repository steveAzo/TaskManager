const Task = require('../Models/TasksModel')

const createTask = async (taskData) => {
    try {
        const newTask = await Task.create(taskData)
        return { success: true, task: newTask }
    } catch(error) {
        console.error("Error creating task:", error);
        return { success: false, error: error.message || "Unknown Error" }
    }
}

const updateTask = async (taskId, updateDetails) => {
    try {
        console.log("Received update request for task ID:", taskId);
        console.log("Update details:", updateDetails);
        const updatedTask = await Task.findByIdAndUpdate(taskId, updateDetails, { new: true })
        if (!updatedTask) {
            console.log("Task not found with ID:", taskId);
            throw { status: 404, message: `Task not found with ID ${taskId}` }
        }
        console.log("Task updated successfully:", updatedTask)
        return { success: true, task: updatedTask }
    } catch (error) {
        console.error("Error updating task:", error.message || error)
        throw { status: error?.status || 500, message: error?.message || "Internal Server Error" }
    }
}

const getAllTasks = async () => {
    try {
        const tasks = await Task.find();
        return { success: true, tasks };
    } catch (error) {
        console.error("Error retrieving tasks:", error);
        throw { success: false, status: error.status || 500, message: error?.message || "Internal Server Error" }
    }
}

const getOneTask = async (taskId) => {
    try {
        const task = await Task.findById(taskId);
        if (!task) {
            throw { status: 404, message: `Task not found with ID ${taskId}` }
        }
        return { success: true, task }
    } catch (error) {
        console.error("Error retrieving task:", error);
        throw { success: false, status: error.status || 500, message: error?.message || "Internal Server Error" }
    }
}

const deleteOneTask = async (taskId) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(taskId)
        if (!deletedTask) {
            throw { status: 404, message: `Task not found with ID ${taskId}` }
        }
        return { success: true, task: deletedTask };
    } catch (error) {
        console.error("Error deleting task:", error);
        throw { success: false, status: error.status || 500, message: error?.message || "Internal Server Error" };
    }
}

module.exports = {
    createTask,
    updateTask,
    getAllTasks,
    getOneTask,
    deleteOneTask,
}
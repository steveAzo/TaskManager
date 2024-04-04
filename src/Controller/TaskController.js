const taskServices = require("../Services/TaskServices")

const createTask = async (req, res) => {
    try {
        const taskDetails = req.body;
        const result = await taskServices.createTask(taskDetails);
        if (result.success) {
            res.status(201).json(result);
        } else {
            res.status(500).json(result);
        }
    } catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

const updateTask = async (req, res) => {
    try {
        const { taskId } = req.params
        const updateDetails = req.body;
        const result = await taskServices.updateTask(taskId, updateDetails);
        if (result.success) {
            console.log("Task updated successfully:", result.task);
            res.status(200).json(result);
        } else {
            console.log("Failed to update task:", result.message);
            res.status(result.status).json(result);
        }
    } catch (error) {
        console.error("Error updating task:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

const getAllTasks = async (req, res) => {
    try {
        const result = await taskServices.getAllTasks();
        res.status(200).json(result);
    } catch (error) {
        console.error("Error retrieving tasks:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

const getOneTask = async (req, res) => {
    try {
        const { taskId } = req.params
        const result = await taskServices.getOneTask(taskId);
        if (result.success) {
            res.status(200).json(result);
        } else {
            res.status(result.status).json(result);
        }
    } catch (error) {
        console.error("Error retrieving task:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

const deleteOneTask = async (req, res) => {
    try {
        const { taskId } = req.params
        const result = await taskServices.deleteOneTask(taskId);
        if (result.success) {
            res.status(200).json(result);
        } else {
            res.status(result.status).json(result);
        }
    } catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

module.exports = {
    createTask,
    updateTask,
    getOneTask,
    getAllTasks,
    deleteOneTask
}

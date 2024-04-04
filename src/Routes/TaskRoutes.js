const express = require("express");
const router = express.Router();
const TaskController = require('../Controller/TaskController');

/**
 * @swagger
 * /api/tasks/createTask:
 *   post:
 *     summary: Create a new task
 *     description: Endpoint to create a new task.
 *     requestBody:
 *       required: true
 *       schema:
 *         type: object
 *         properties:
 *           title:
 *             type: string
 *             description: Title of the task.
 *           description:
 *             type: string
 *             description: Description of the task.
 *           dueDate:
 *             type: string
 *             format: date
 *             description: Due date of the task.
 *           status:
 *             type: string
 *             enum: ['pending', 'in_progress', 'completed']
 *             description: Status of the task.
 *     responses:
 *       '201':
 *         description: Task created successfully
 *       '500':
 *         description: Internal server error
 */
router.post('/createTask', TaskController.createTask);

/**
 * @swagger
 * /api/tasks/{taskId}:
 *   patch:
 *     summary: Update an existing task
 *     description: Endpoint to update an existing task by ID.
 *     parameters:
 *       - in: path
 *         name: taskId
 *         required: true
 *         description: ID of the task to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       schema:
 *         type: object
 *         properties:
 *           title:
 *             type: string
 *           description:
 *             type: string
 *           dueDate:
 *             type: string
 *             format: date
 *           status:
 *             type: string
 *             enum: ['pending', 'in_progress', 'completed']
 *     responses:
 *       '200':
 *         description: Task updated successfully
 *       '404':
 *         description: Task not found
 *       '500':
 *         description: Internal server error
 */
router.patch('/:taskId', TaskController.updateTask);

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Retrieve all tasks
 *     description: Endpoint to retrieve all tasks.
 *     responses:
 *       '200':
 *         description: Successfully retrieved list of tasks
 *       '500':
 *         description: Internal server error
 */
router.get('/', TaskController.getAllTasks);

/**
 * @swagger
 * /api/tasks/getTask/{taskId}:
 *   get:
 *     summary: Retrieve a task by ID
 *     description: Endpoint to retrieve a task by its ID.
 *     parameters:
 *       - in: path
 *         name: taskId
 *         required: true
 *         description: ID of the task to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully retrieved task
 *       '404':
 *         description: Task not found
 *       '500':
 *         description: Internal server error
 */
router.get('/getTask/:taskId', TaskController.getOneTask);

/**
 * @swagger
 * /api/tasks/{taskId}:
 *   delete:
 *     summary: Delete a task by ID
 *     description: Endpoint to delete a task by its ID.
 *     parameters:
 *       - in: path
 *         name: taskId
 *         required: true
 *         description: ID of the task to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Task deleted successfully
 *       '404':
 *         description: Task not found
 *       '500':
 *         description: Internal server error
 */
router.delete('/:taskId', TaskController.deleteOneTask);

module.exports = router;

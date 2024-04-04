Task Manager API
The Task Manager API is a RESTful web service designed to manage tasks and schedules. It provides endpoints for creating, updating, retrieving, and deleting tasks.

Table of Contents
Features
Installation
Usage
Endpoints
Documentation
Technologies Used
Contributing
License
Features
Create new tasks with title, description, due date, and status.
Update existing tasks by ID.
Retrieve details of a specific task by ID.
Retrieve a list of all tasks.
Delete a task by ID.
Installation
To run the Task Manager API locally, follow these steps:

Clone this repository to your local machine.
Navigate to the project directory.
Install dependencies using npm install.
Set up a MongoDB database and add the connection URI to a .env file.
Start the server using npm start.
Usage
Once the server is running, you can interact with the API using HTTP requests. You can use tools like Postman or cURL to send requests to the provided endpoints.

Endpoints
POST /api/tasks/createTask: Create a new task.
PATCH /api/tasks/{taskId}: Update an existing task by ID.
GET /api/tasks: Retrieve a list of all tasks.
GET /api/tasks/{taskId}: Retrieve details of a specific task by ID.
DELETE /api/tasks/{taskId}: Delete a task by ID.
For detailed information on each endpoint and their request and response formats, refer to the API documentation.

Documentation
The Task Manager API is documented using Swagger UI. You can access the API documentation by running the server and navigating to /api-docs in your browser.

Technologies Used
Node.js
Express.js
MongoDB
Swagger UI
Mongoose
Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/new-feature).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/new-feature).
Create a new Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.
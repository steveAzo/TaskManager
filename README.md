# Task Manager API

The Task Manager API is a RESTful web service designed to manage tasks and schedules. It provides endpoints for creating, updating, retrieving, and deleting tasks.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Documentation](#documentation)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features
- Create new tasks with title, description, due date, and status.
- Update existing tasks by ID.
- Retrieve details of a specific task by ID.
- Retrieve a list of all tasks.
- Delete a task by ID.

## Installation
To run the Task Manager API locally, follow these steps:
1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Set up a MongoDB database and add the connection URI to a `.env` file.
5. Start the server using `npm start`.

## Usage
Once the server is running, you can interact with the API using HTTP requests. You can use tools like Postman or cURL to send requests to the provided endpoints.

## Endpoints
- **POST /api/tasks/createTask:** Create a new task.
- **PATCH /api/tasks/{taskId}:** Update an existing task by ID.
- **GET /api/tasks:** Retrieve a list of all tasks.
- **GET /api/tasks/{taskId}:** Retrieve details of a specific task by ID.
- **DELETE /api/tasks/{taskId}:** Delete a task by ID.

For detailed information on each endpoint and their request and response formats, refer to the API documentation.

## Documentation
The Task Manager API is documented using Swagger UI. You can access the API documentation by visiting the hosted API documentation URL.

**Hosted API Documentation URL:** [Task Manager API Documentation](https://taskmanager-i5uc.onrender.com/api-docs/)

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Swagger UI
- Mongoose

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow the guidelines outlined in the CONTRIBUTING.md file.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

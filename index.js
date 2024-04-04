const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./swaggerConfig')


const TaskRouter = require('./src/Routes/TaskRoutes')

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
console.log('Swagger UI documentation endpoint registered')
app.use('/api/tasks', TaskRouter)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("connected to the database")
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`)
        })
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB", error)
        process.exit(1)
    })
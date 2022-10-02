import express from 'express';
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

import cors from "cors"


const app = express()
app.use(cors())
app.use(express.json())

app.use('/api', employeesRoutes)
app.use('/api', indexRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'EndPoint no Encontrado'
    })
})

export default app;
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import path from 'path'

import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoute.js'
import imageRouter from './routes/imageRoutes.js'



const PORT = process.env.PORT || 3000

const app = express();

app.use(express.json())

const _dirname = path.dirname("")
const buildpath = path.join(_dirname, "../frontend/dist")
app.use(express.static(buildpath))

app.use(cors())

await connectDB()

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)

app.get('/', (req, res) => {
    res.send("API Working")
})

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})


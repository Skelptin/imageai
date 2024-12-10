import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import path from 'path'

import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoute.js'
import imageRouter from './routes/imageRoutes.js'



const PORT = process.env.PORT || 4000

const app = express();

app.use(express.json())

const _dirname = path.dirname("")
const buildPath = path.join(_dirname, "../frontend/dist")
app.use(express.static(buildPath))

app.use(cors())

await connectDB()

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)

app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});


app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
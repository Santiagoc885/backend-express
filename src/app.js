
import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/user.js'
import connectDB from './config/db.js'

dotenv.config()

const app = express()
app.use(express.json())

// Función para iniciar el servidor
const startServer = async () => {
  try {
    await connectDB()
    
    // Las rutas se registran DESPUÉS de que la BD está conectada
    app.use('/users', userRoutes)
    
    app.get('/', (req, res) => {
      res.send('API running.....')
  
    })
  } catch (error) {
    console.error('Failed to start server:', error.message)
    process.exit(1)
  }
}

startServer()

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(` ---> Server running on http://localhost:${PORT} <---`)
})



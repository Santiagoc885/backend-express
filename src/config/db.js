import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI no está definida en el archivo .env')
    }
    
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000
    })
    console.log('-----> MongoDB conectado correctamente <-----')
  } catch (error) {
    console.error('Error de conexión a MongoDB:', error.message)
    throw error // Relanza el error para que startServer() lo maneje
  }
}

export default connectDB

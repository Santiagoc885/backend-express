
import express from 'express'
import mongoose from 'mongoose'
import User from '../models/user.js'

const router = express.Router()

router.post('/', async (req, res) => {
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({
      message: 'Database not connected'
    
      
    })
  }

  try {
    const user = new User(req.body)
    await user.save()
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({ message: error.message })
    console.log(error)
  }
})

router.get('/', async (req, res) => {
  const users = await User.find()
  res.json(users)
})

// Obtener usuario por ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }
    res.json(user)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Actualizar usuario por ID
router.put('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }
    res.json(user)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Borrar usuario por ID
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }
    res.json({ message: 'Usuario eliminado correctamente', user })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

export default router

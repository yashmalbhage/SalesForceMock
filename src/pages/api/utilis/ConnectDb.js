const mongoose = require('mongoose')
import nextConnect from 'next-connect'

async function connectDB() {
  try {
    const MONGO_URL = 'mongodb+srv://yashmalbhage1:nCQNU42B9n5sAjXu@cluster0.hw4lrkr.mongodb.net/'
    await mongoose.connect(MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log('connected  to mongo ')
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectDB

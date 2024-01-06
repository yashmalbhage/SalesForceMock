// ConnectDb.ts
import mongoose from 'mongoose'

async function connectDB(): Promise<void> {
  try {
    const MONGO_URL = 'mongodb+srv://yashmalbhage1:nCQNU42B9n5sAjXu@cluster0.hw4lrkr.mongodb.net/your-database-name'
    await mongoose.connect(MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
  }
}

export default connectDB

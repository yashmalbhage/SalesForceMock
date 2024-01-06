import { createRouter } from 'next-connect'
import nc from 'next-connect'
import mongoose from 'mongoose'
import connectDb from './utilis/ConnectDb'
import Schedule from './models/schedule'

connectDb()
const router = createRouter()
router.post(async (req, res) => {
  const { userId, name, email, phoneNo, experience, date, time } = req.body
  const formData = new Schedule({ userId, name, email, phoneNo, experience, date, time })
  try {
    await formData.save()
    res.status(200).json({ message: 'Data saved to database' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error saving to database' })
  }
})

router.get(async (req, res) => {
  try {
    const userEmail = req.query
    const email = userEmail.userEmail
    console.log(userEmail)
    console.log(typeof userEmail)

    // const stringUserEmail = userEmail.toString()
    const interviews = await Schedule.findOne({ email: email })
    console.log(interviews)
    res.status(200).json(interviews)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error fetching user details' })
  }
})

export default router.handler()

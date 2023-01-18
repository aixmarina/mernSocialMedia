import bcrypt from "bcrypt"
//import jwt from "jsonwebtoken"
import User from "../models/User.js"

// REGISTER USER
export const register = async (req, res) => { //req for request, res por response
  try {
    const {
      firstName,
      lastName, 
      email,
      password,
      picturePath,
      friends,
      location,
      ocupation
    } = req.body

    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt) // this is to encrypt the password

    const newUser = new User({
      firstName,
      lastName, 
      email,
      password: passwordHash,
      picturePath,
      friends,
      location,
      ocupation, 
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000)
    })
    const savedUser = await newUser.save()
    res.status(201).json(savedUser) //send the user the status 201
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
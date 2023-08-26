const express = require("express")
const {userSchema, user} = require("../model/user.model")


const userRouter =  express.Router()


userRouter.post('/post', async (req, res) => {
    try {
      const { id,name,img,email,phone_number,address,gender,specialist,availability } = req.body;
      const newuser = new user({ id,name,img,email,phone_number,address,gender,specialist,availability });
      await newuser.save();
      res.status(201).json({ message: 'Item created successfully' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
      console.log(error)
    }
  });

  userRouter.get('/alldata', async (req, res) => {
    try {
      const dentists = await user.find();
      res.json(dentists);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
    
  userRouter.patch('/update/id', async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
  
    try {
      const updatedDentist = await user.findByIdAndUpdate(id, updates, { new: true });
      if (!updatedDentist) {
        return res.status(404).json({ error: 'Dentist not found' });
        
      }
      res.json(updatedDentist);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
      console.log(error)
    }
  });
  

module.exports = {
    userRouter
}
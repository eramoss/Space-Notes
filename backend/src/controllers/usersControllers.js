const userModel = require('../models/userModel')

const getAll = async (_req, res) => {
  
  const users = await userModel.getAll()

  return res.status(200).json(users)
}

const addUser = async (req, res) =>{
  const addedUser = await userModel.addUser(req.body)
  return res.status(201).json(addedUser)
}

const deleteUser = async (req,res) =>{

  const {id} = req.params
  
  await userModel.deleteUser(id)
  return res.status(204).json()
 
}

const updateUser = async (req,res) =>{

  const {id} = req.params
  await userModel.updateUser(id,req.body)

  return res.status(204).json()
}



module.exports = {
    getAll,
    addUser,
    deleteUser,
    updateUser
}
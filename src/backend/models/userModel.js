const connection = require('./connection')
const uuid = require('uuid')



const getAll = async () =>{
  const [users] =  await connection.execute('SELECT * FROM users')
  return users
}

const addUser = async (user) =>{
 const {email,password} = user

 const [addedUser] = await connection.execute('INSERT INTO users(id,email,password) VALUES (?,?,?)', [ uuid.v4() ,email,password])

return {insertId : addedUser.insertId}
}

const deleteUser = async(email) =>{
  const [removedUser] = await connection.execute('DELETE FROM users WHERE id = ?', [email])
  return removedUser
}

const updateUser = async (id,user) =>{

  const {email,password} = user

  const [updateUser]= await connection.execute('UPDATE users SET email = ? , password = ? WHERE id = ?', [email, password, id])
  return updateUser
}


module.exports = {
    getAll,
    addUser,
    deleteUser,
    updateUser
}
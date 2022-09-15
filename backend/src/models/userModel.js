const connection = require('./connection')



const getAll = async () =>{
  const [users] =  await connection.execute('SELECT * FROM data_users')
  return users
}

const addUser = async (user) =>{
 const {email,password} = user

 const [addedUser] = await connection.execute('INSERT INTO data_users(email,password) VALUES (?,?)', [email,password])

return {insertId : addedUser.insertId}
}

const deleteUser = async(id) =>{
  const [removedUser] = await connection.execute('DELETE FROM data_users WHERE id = ?', [id])
  return removedUser
}

const updateUser = async (id,user) =>{

  const {email,password} = user

  const [updateUser]= await connection.execute('UPDATE data_users SET email = ? , password = ? WHERE id = ?', [email, password, id])
  return updateUser
}


module.exports = {
    getAll,
    addUser,
    deleteUser,
    updateUser
}
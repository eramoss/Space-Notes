const express = require('express')
const router = express.Router()
const userController = require('./controllers/usersControllers')
const userMiddleWare = require('./middlewares/usersMiddleWare')

router.get('/users', userController.getAll)
router.post('/users', userMiddleWare.validateBody , userController.addUser)
router.delete('/users/:id', userController.deleteUser)
router.put('/users/:id',userMiddleWare.validateBody, userController.updateUser)


module.exports = router
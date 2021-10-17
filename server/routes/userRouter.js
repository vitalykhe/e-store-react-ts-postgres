const Router = require('express')
const router = new Router()
const UserController = require('../controllers/userController')
const { User } = require('../models/models')

router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.get('/auth', UserController.checkAuth)


module.exports = router
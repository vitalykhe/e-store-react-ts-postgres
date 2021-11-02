const Router = require('express')
const typeController = require('../controllers/typeController')
const router = new Router()
const TypeController = require('../controllers/typeController')
const checkRole = require('../middleware/roleCheckMiddleware')

router.post('/update', checkRole('ADMIN'), typeController.update)
router.post('/:id', checkRole('ADMIN'), typeController.delete)
router.post('/', checkRole('ADMIN'), typeController.create)
router.get('/', typeController.getAll)

module.exports = router

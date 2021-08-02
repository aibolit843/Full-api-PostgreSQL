const Router = require('express')
const router = new Router()
const deviveController = require('../controllers/deviveController')

router.post('/', deviveController.create)
router.get('/', deviveController.getAll)
router.get('/:id', deviveController.getOne)

module.exports = router
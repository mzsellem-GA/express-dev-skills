const express = require('express')
const router = express.Router()

const skillController = require('../controllers/skills')


router.get('/', skillController.index)

router.get('/new', skillController.newSkill)

router.get('/:id', skillController.show)



router.post('/skills', skillController.create)

router.put('/:id/edit', skillController.updateOne)


module.exports = router


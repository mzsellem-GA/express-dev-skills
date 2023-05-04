const express = require('express')
const router = express.Router()

const skillController = require('../controllers/skills')


router.get('/', skillController.index)

router.get('/new', skillController.newSkill)

router.get('/:id', skillController.show)



router.post('/', skillController.create) //WHY DOES THIS HAVE TO BE AT THE ROOT??? and not /skills

router.put('/:id', skillController.updateOne)


module.exports = router


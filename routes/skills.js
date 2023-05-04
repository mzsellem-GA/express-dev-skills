const express = require('express')
const router = express.Router()

const skillController = require('../controllers/skills')

// /skills
router.get('/', skillController.index)
// /skills/new
router.get('/new', skillController.newSkill)
// /skills/:id
router.get('/:id', skillController.show)


// /skills
router.post('/', skillController.create) //WHY DOES THIS HAVE TO BE AT THE ROOT??? and not /skills

router.delete('/:id', skillController.deleteSkill)

// /skills/:id
router.put('/:id', skillController.updateOne)



module.exports = router


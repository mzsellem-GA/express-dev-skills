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
router.post('/', skillController.create) 

router.delete('/:id', skillController.deleteSkill)


module.exports = router


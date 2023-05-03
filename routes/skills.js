const express = require('express')
const router = express.Router()

const skillController = require('../controllers/skills')


router.get('/', skillController.index)

router.get('/:id', skillController.show)

router.get('/skills', skillController.create)


module.exports = router


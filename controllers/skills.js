const Skill = require('../models/skill')

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll() 
    })
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    })
}

function create(req, res) {
    Skill.create(req.body)
    res.redirect('/skills')
}

function newToDo(req, res) {
    res.render('skills/new', { title: 'New Skill' })
}

module.exports = {
    index,
    show,
    create, 
    newToDo
}
const skills = [
    { id: 125223, skill: 'HTML', done: true },
	{ id: 127904, skill: 'Git', done: true },
	{ id: 139608, skill: 'Express', done: false },
]

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function create(skill) {
    skill.id = Date.now() % 1000000
    skill.done = false
    skills.push(skill)
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id) //finds the index of the id
    skills.splice(idx, 1)
}

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}
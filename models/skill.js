const skills = [
    { id: 125223, skill: 'HTML', done: true },
	{ id: 127904, skill: 'JS', done: false },
	{ id: 139608, skill: 'Express', done: false },
]


function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

module.exports = {
    getAll,
    getOne
}
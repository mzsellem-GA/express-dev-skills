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

function create(todo) {
    // todo.id = Date.now() % 1000000
    // todo.done = false
    todos.push(todo)
}

module.exports = {
    getAll,
    getOne,
    create
}
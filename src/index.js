const cohortList = []

// function create(description) {
//     const todo = {
//         id: todoList.length + 1,
//         description,
//         status: 'incomplete'
//     }

//     todoList.push(todo)

//     return todo
// }
function create(name) {
  const cohort = {
    id: cohortList.length + 1,
    name
  }

  cohortList.push(cohort)
  return cohort
}

module.exports = {
  create
}

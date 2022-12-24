const cohortList = []
const studentList = []

// Remove student from a specific cohort
function removeStudent(id) {
  const found = studentList.find((student) => student.studentId === id)

  if (!found) {
    return false
  }
  const index = studentList.findIndex((s) => s.studentId === id)
  studentList.slice(index, 1)
  return found
}
// Remove a cohort by cohort name
function removeCohort(name) {
  const found = cohortList.find((cohort) => cohort.name === name)

  if (!found) {
    return false
  }
  const index = cohortList.findIndex((c) => c.name === name)
  cohortList.slice(index, 1)
  return found
}
// Add student to a specific cohort
function addStudent(
  cohort,
  studentId,
  firstName,
  lastname,
  githubUserName,
  email
) {
  const student = {
    cohort,
    studentId,
    firstName,
    lastname,
    githubUserName,
    email
  }
  studentList.push(student)
  return student
}

// Search for a cohort by cohort name
function search(name) {
  const found = cohortList.find((cohort) => cohort.name === name)
  if (found) {
    return found
  }
}

// Create a cohort with a cohort name
function create(name) {
  const cohort = {
    id: cohortList.length + 1,
    name
  }

  cohortList.push(cohort)
  return cohort
}

// reset cohort list so that it will every test will start from scratch.
function resetCohort() {
  cohortList.splice(0, cohortList.length)
}

module.exports = {
  create,
  resetCohort,
  search,
  addStudent,
  removeCohort,
  removeStudent
}

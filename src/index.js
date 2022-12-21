const cohortList = []

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

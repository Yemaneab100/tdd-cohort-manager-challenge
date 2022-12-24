const cohortList = []

function search(name) {
  const found = cohortList.find((cohort) => cohort.name === name)
  if (found) {
    return found
  }
}

function create(name) {
  const cohort = {
    id: cohortList.length + 1,
    name
  }

  cohortList.push(cohort)
  return cohort
}

function resetCohort() {
  cohortList.splice(0, cohortList.length)
}

module.exports = {
  create,
  resetCohort,
  search
}

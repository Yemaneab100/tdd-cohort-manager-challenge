const {
  create,
  resetCohort,
  search,
  addStudent,
  removeCohort,
  removeStudent
} = require('../src/index.js')

describe('Cohort Manger', () => {
  beforeEach(() => {
    resetCohort()
  })
  it('should remove a student', () => {
    addStudent('cohort1', 5678, 'Bob', 'Nicolas', 'bob@github', 'bob@gmail')
    addStudent('cohort2', 1234, 'John', 'Smith', 'john@github', 'john@gmail')
    const student1 = removeStudent(1234)

    expect(student1).toEqual({
      cohort: 'cohort2',
      studentId: 1234,
      firstName: 'John',
      lastname: 'Smith',
      githubUserName: 'john@github',
      email: 'john@gmail'
    })
  })

  it('should remove a cohort', () => {
    create('cohort1')
    create('cohort2')
    const cohort1 = removeCohort('cohort1')
    expect(cohort1).toEqual({
      id: 1,
      name: 'cohort1'
    })
  })
  it('should add a student', () => {
    const student1 = addStudent(
      'cohort2',
      1234,
      'John',
      'Smith',
      'john@github',
      'yemun@gmail'
    )

    expect(student1).toEqual({
      cohort: 'cohort2',
      studentId: 1234,
      firstName: 'John',
      lastname: 'Smith',
      githubUserName: 'john@github',
      email: 'yemun@gmail'
    })
  })

  it('should search a cohort', () => {
    create('cohort1')
    create('cohort2')
    const cohort1 = search('cohort1')
    expect(cohort1).toEqual({
      id: 1,
      name: 'cohort1'
    })
  })
  it('should create a cohort', () => {
    const cohort1 = create('cohort1')
    expect(cohort1).toEqual({
      id: 1,
      name: 'cohort1'
    })
  })

  it('creates multiple cohorts', () => {
    create('cohort1')
    const cohort2 = create('cohort2')

    expect(cohort2).toEqual({
      id: 2,
      name: 'cohort2'
    })
  })
})

const { create, resetCohort } = require('../src/index.js')

describe('Cohort Manger', () => {
  beforeEach(() => {
    resetCohort()
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

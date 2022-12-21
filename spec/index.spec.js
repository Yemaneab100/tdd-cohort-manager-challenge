const { create } = require('../src/index.js')

// it("creates a todo item", () => {
//     const item = create('write code')

//     expect(item).toEqual({
//         id: 1,
//         description: 'write code',
//         status: 'incomplete'
//     })
// })

describe('Cohort Manger', () => {
  it('should create a cohort', () => {
    const cohort1 = create('cohort1')
    expect(cohort1).toEqual({
      id: 1,
      name: 'cohort1'
    })
  })
})


import Subject from './index'

describe('test-suite::expectBecameFalse', () => {
  it('throws an error if value was already false', () => {
    expect(() => {
      Subject({
        fn: () => null,
        of: () => true,
      })
    }).toThrow()
  })

  it('throws an error if value does not turns to false', () => {
    expect(() => {
      Subject({
        fn: () => null,
        of: () => true,
      })
    }).toThrow()
  })

  it('passes with the right change', () => {
    let value = true
    expect(() => {
      Subject({
        fn: () => { value = false },
        of: () => value,
      })
    }).not.toThrow()
  })
})

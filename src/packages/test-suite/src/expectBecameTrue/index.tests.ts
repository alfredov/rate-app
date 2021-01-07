
import Subject from './index'

describe('test-suite::expectBecameTrue', () => {
  it('throws an error if value was already true', () => {
    expect(() => {
      Subject({
        fn: () => null,
        of: () => true,
      })
    }).toThrow()
  })

  it('throws an error if value does not turns to true', () => {
    expect(() => {
      Subject({
        fn: () => null,
        of: () => false,
      })
    }).toThrow()
  })

  it('passes with the right change', () => {
    let value = false
    expect(() => {
      Subject({
        fn: () => { value = true },
        of: () => value,
      })
    }).not.toThrow()
  })
})

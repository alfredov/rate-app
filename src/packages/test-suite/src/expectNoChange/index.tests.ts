
import Subject from './index'

describe('test-suite::expectNoChange', () => {
  jest.useFakeTimers()

  describe('using "from" validation', () => {
    it('throws an error if start value is diff', () => {
      expect(() => {
        Subject({
          fn: () => null,
          of: () => 4,
          from: 2,
        })
      }).toThrow()
    })

    it('throws an error if end value is same', () => {
      let a = 3
      expect(() => {
        Subject({
          fn: () => { a = 5 },
          of: () => a,
          from: 3,
        })
      }).toThrow()
    })

    it('validates change', () => {
      expect(() => {
        Subject({
          fn: () => null,
          of: () => 3,
          from: 3,
        })
      }).not.toThrow()
    })

    it('validates change without "from"', () => {
      expect(() => {
        Subject({
          fn: () => null,
          of: () => 300,
        })
      }).not.toThrow()
    })
  })

  describe('with async', () => {
    it('throws an error', () => {
      expect.assertions(2)
      expect(() => {
        Subject({
          fn: () => null,
          of: () => 2,
          from: 3,
        })
        jest.runAllTimers()
      }).toThrow()
    })

    it('validates changes', () => {
      expect.assertions(4)
      expect(() => {
        Subject({
          async: true,
          fn: () => null,
          of: () => 1,
          from: 1,
        })
        jest.runAllTimers()
      }).not.toThrow()
    })

    it('validates changes without "from"', () => {
      expect.assertions(2)
      expect(() => {
        Subject({
          async: true,
          fn: () => null,
          of: () => 10000,
        })
        jest.runAllTimers()
      }).not.toThrow()
    })
  })
})

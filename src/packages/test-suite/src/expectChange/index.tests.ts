
import Subject from './index'

describe('test-suite::expectChange', () => {
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
      expect(() => {
        Subject({
          fn: () => null,
          of: () => 3,
          from: 3,
        })
      }).toThrow()
    })

    it('validates change', () => {
      let a = 3
      expect(() => {
        Subject({
          fn: () => { a = -5 },
          of: () => a,
          from: 3,
          to: -5,
        })
      }).not.toThrow()
    })
  })

  describe('using "to" validation', () => {
    it('throws an error if start value is same', () => {
      expect(() => {
        Subject({
          fn: () => null,
          of: () => 2,
          to: 2,
        })
      }).toThrow()
    })

    it('validates change', () => {
      let a = 3
      expect(() => {
        Subject({
          fn: () => { a = -5 },
          of: () => a,
          from: 3,
          to: -5,
        })
      }).not.toThrow()
    })
  })

  describe('with async', () => {
    it('throws an error', () => {
      expect.assertions(3)
      expect(() => {
        Subject({
          fn: () => null,
          of: () => 2,
          from: 2,
          to: 3,
        })
        jest.runAllTimers()
      }).toThrow()
    })

    it('validates changes', () => {
      expect.assertions(4)
      let a = 1
      expect(() => {
        Subject({
          async: true,
          fn: () => { a = 2 },
          of: () => a,
          from: 1,
          to: 2,
        })
        jest.runAllTimers()
      }).not.toThrow()
    })
  })

  describe('using by', () => {
    it('throws an error', () => {
      expect(() => {
        Subject({
          fn: () => null,
          of: () => 2,
          by: 1,
        })
      }).toThrow()
    })

    it('validates changes', () => {
      let a = 3
      expect(() => {
        Subject({
          fn: () => { a = -5 },
          of: () => a,
          by: -8,
        })
      }).not.toThrow()
    })

    describe('with async', () => {
      it('throws an error', () => {
        expect.assertions(2)
        expect(() => {
          Subject({
            fn: () => null,
            of: () => 2,
            by: 1,
          })
          jest.runAllTimers()
        }).toThrow()
      })

      it('validates changes', () => {
        expect.assertions(2)
        let a = 3
        expect(() => {
          Subject({
            async: true,
            fn: () => { a = -5 },
            of: () => a,
            by: -8,
          })
          jest.runAllTimers()
        }).not.toThrow()
      })
    })
  })
})

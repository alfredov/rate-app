
import Subject from './index'

describe('test-suite::expectChange', () => {
  describe('using "from" validation', () => {
    it('throws an error if start value is diff', async () => {
      await expect(Subject({
        fn: () => null,
        of: () => 4,
        from: 2,
      }))
        .rejects.toThrow()
    })

    it('throws an error if end value is same', async () => {
      await expect(Subject({
        fn: () => null,
        of: () => 3,
        from: 3,
      }))
        .rejects.toThrow()
    })

    it('validates change', async () => {
      let a = 3
      await expect(Subject({
        fn: () => { a = -5 },
        of: () => a,
        from: 3,
        to: -5,
      }))
        .resolves.toBeUndefined()
    })
  })

  describe('using "to" validation', () => {
    it('throws an error if start value is same', () => {
      void expect(Subject({
        fn: () => null,
        of: () => 2,
        to: 2,
      }))
        .rejects.toThrow()
    })

    it('validates change', async () => {
      let a = 3
      await expect(Subject({
        fn: () => { a = -5 },
        of: () => a,
        from: 3,
        to: -5,
      }))
        .resolves.toBeUndefined()
    })
  })

  describe('using by', () => {
    it('throws an error', async () => {
      await expect(Subject({
        fn: () => null,
        of: () => 2,
        by: 1,
      }))
        .rejects.toThrow()
    })

    it('validates changes', async () => {
      let a = 3
      await expect(Subject({
        fn: () => { a = -5 },
        of: () => a,
        by: -8,
      }))
        .resolves.toBeUndefined()
    })
  })
})

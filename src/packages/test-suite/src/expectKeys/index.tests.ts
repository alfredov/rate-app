
import Subject from './index'

describe('test-suite::expectKeys', () => {
  jest.useFakeTimers()

  it('throws an error if keys not present', () => {
    expect(() => {
      Subject({ a: 1 }, ['b'])
    }).toThrow()
  })

  it('throws an error if keys not asked', () => {
    expect(() => {
      Subject({ a: 1, c: 2 }, ['a'])
    }).toThrow()
  })

  it('validates when all keys matches', () => {
    expect(() => {
      Subject({ a: 1, b: 2, c: 3 }, ['b', 'a', 'c'])
    }).not.toThrow()
  })
})

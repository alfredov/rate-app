
type GeneralValue = number | string | {} | [] | null | undefined

type Params = {
  async?: boolean,
  fn: Function,
  from?: GeneralValue,
  of: Function,
}

const VALUE_NOT_SET = '_un1_set2_value3_'

export default ({ async = false, fn, from = VALUE_NOT_SET, of }: Params) => {
  // Initial value
  const initial: GeneralValue = of()

  if (from !== VALUE_NOT_SET) {
    // Initial value error
    expect(initial).toEqual(from)
  }

  fn()

  if (!async) {
    // Final value
    const final: GeneralValue = of()

    if (from !== VALUE_NOT_SET) {
      // Initial value error
      expect(final).toEqual(from)
    }

    // Final value
    expect(final).toEqual(initial)
    return
  }

  return new Promise<void>((resolve) => {
    setTimeout(() => {
      // Final value
      const final: GeneralValue = of()

      if (from !== VALUE_NOT_SET) {
        // Initial value error
        expect(final).toEqual(from)
      }

      // Final value
      expect(final).toEqual(initial)
      resolve()
    })
  })
}

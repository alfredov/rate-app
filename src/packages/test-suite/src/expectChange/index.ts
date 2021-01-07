
type GeneralValue = number | string | {} | [] | null | undefined

type Params = {
  async?: boolean,
  by?: GeneralValue,
  fn: Function,
  from?: GeneralValue,
  of: Function,
  to?: GeneralValue,
}

const VALUE_NOT_SET = '_un1_set2_value3_'

export default ({
  async = false,
  by = VALUE_NOT_SET,
  fn,
  from = VALUE_NOT_SET,
  of,
  to,
}: Params) => {
  // Initial value
  const initial: GeneralValue = of()

  if (by !== VALUE_NOT_SET) {
    fn()

    if (!async) {
      // Increased not applied
      expect(of()).toBe((initial as number) + (by as number))
      return
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        // Increased not applied
        expect(of()).toBe((initial as number) + (by as number))
        // @ts-ignore
        resolve()
      })
    })
  }

  if (from !== VALUE_NOT_SET) {
    // Initial value error
    expect(initial).toEqual(from)
  } else {
    // Initial value error
    expect(initial).not.toEqual(to)
  }

  fn()

  // Final value
  const final: GeneralValue = of()

  if (!async) {
    // Final value error
    expect(final).not.toEqual(from)
    expect(final).toEqual(to)
    return
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      // Final value error
      expect(final).not.toEqual(from)
      expect(final).toEqual(to)
      // @ts-ignore
      resolve()
    })
  })
}


type GeneralValue = number | string | {} | [] | null | undefined

type Params = {
  by?: GeneralValue,
  fn: Function,
  from?: GeneralValue | Function,
  of: Function,
  to?: GeneralValue | Function,
}

const VALUE_NOT_SET = '_un1_set2_value3_'

export default async ({
  by = VALUE_NOT_SET,
  fn,
  from = VALUE_NOT_SET,
  of,
  to,
}: Params) => {
  // Initial value
  const initial: GeneralValue = await of()

  if (by !== VALUE_NOT_SET) {
    await fn()

    const endValue: GeneralValue = await of()
    // Increased not applied
    expect(endValue)
      .toBe((initial as number) + (by as number))
    return
  }

  if (from !== VALUE_NOT_SET) {
    // Initial value error
    expect(initial).toEqual(from)
  } else {
    // Initial value error
    expect(initial).not.toEqual(to)
  }

  await fn()

  // Final value
  const final: GeneralValue = await of()

  expect(final).not.toEqual(from)
  expect(final).toEqual(to)
}

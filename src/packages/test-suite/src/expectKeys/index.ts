
export default (obj: {}, keys: string[]) => expect(Object.keys(obj).sort())
  .toEqual(keys.sort())

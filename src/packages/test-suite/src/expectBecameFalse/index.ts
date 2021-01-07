
import expectChange from '../expectChange'

type Params = {
  async?: boolean,
  fn: Function,
  of: Function,
}

export default ({ fn, of, async }: Params) => expectChange({
  async,
  fn,
  of,
  to: false,
})

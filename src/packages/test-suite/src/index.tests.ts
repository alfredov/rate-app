
import expectKeys from './expectKeys'

import * as exportList from './index'

describe('test-suite', () => {
  it('exports the right elements', () => {
    expectKeys(
      exportList,
      [
        'createTestComponent',
        'expectBecameFalse',
        'expectBecameTrue',
        'expectChange',
        'expectChangeAsync',
        'expectKeys',
        'expectNoChange',
        'testEpic',
      ],
    )
  })
})

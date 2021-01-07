
import React, { FunctionComponent } from 'react'

import expectBecameTrue from '../expectBecameTrue'
import expectChange from '../expectChange'

import Subject from './index'

type TestProps = {
  text?: string,
}

const TextFunction: FunctionComponent<TestProps> =
  ({ text }) => (<div className="test">{text}</div>)

class TextClass extends React.Component<TestProps> {
  state = { fallbackText: 'no text' }

  render() {
    return (<div className="test">{this.props.text || this.state.fallbackText}</div>)
  }
}

describe('test-suite::createTestComponent', () => {
  it('can force the type of instance', () => {
    const tc = Subject(TextClass, {}, { scopeType: 'mount' })

    expect(String(tc.scope)).toBe(String(tc.mounted))
  })

  it('memo components are mounted by default', () => {
    const tc = Subject(React.memo(TextClass))

    expect(String(tc.scope)).toBe(String(tc.mounted))
  })

  describe('can remount', () => {
    it('direct scope', () => {
      expect(String(Subject(TextClass, {}, { scopeType: 'mount' }).remount()))
        .toBe('[object Object]')
    })

    it('mounted prop', () => {
      const tc = Subject(TextClass, {}, { scopeType: 'shallow' })
      expect(String(tc.mounted))
        .toBe('[object Object]')
      expect(String(tc.remount()))
        .toBe('[object Object]')
    })

    it('creates a mounted component if not such', () => {
      const tc = Subject(TextClass, {}, { scopeType: 'shallow' })
      expect(String(tc.remount()))
        .toBe('[object Object]')
    })
  })

  describe('with functional component', () => {
    const tc = Subject(TextFunction)

    it('can change its props', () => {
      expectChange({
        fn: () => tc.setProps({ text: 'new text' }),
        of: () => tc.getProp('text'),
        from: undefined,
        to: 'new text',
      })
    })

    it('returns all props', () => {
      expectChange({
        fn: () => tc.setProps({ text: 'new text' }),
        of: () => tc.getProps(),
        from: undefined,
        to: { text: 'new text' },
      })
    })

    const helperPropTypes = {
      mounted: '[object Object]',
      rendered: '<div class="test"></div>',
      shallowed: '[object Object]',
      instance: 'null',
    }

    Object.keys(helperPropTypes).forEach((key) => {
      // @ts-ignore
      const expected = helperPropTypes[key]
      // @ts-ignore
      const current = String(tc[key])
      it(`has a prop "${key}" with "${expected}"`, () => {
        expect(current).toBe(expected)
      })

      it('uses same object instance in future calls', () => {
        // @ts-ignore
        expect(tc[key] === tc[key]).toBe(true)
      })
    })
  })

  describe('with class component', () => {
    const tc = Subject(TextClass)

    it('can change its props', () => {
      expectChange({
        fn: () => tc.setProps({ text: 'new text II' }),
        of: () => tc.getProp('text'),
        from: undefined,
        to: 'new text II',
      })
    })

    it('returns all props', () => {
      expectChange({
        fn: () => tc.setProps({ text: 'new text' }),
        of: () => tc.getProps(),
        from: undefined,
        to: { text: 'new text' },
      })
    })

    it('can setState', () => {
      expectChange({
        fn: () => tc.setState({ fallbackText: 'new text' }),
        of: () => tc.getState(),
        from: undefined,
        to: { fallbackText: 'new text' },
      })
    })

    it('can getState for a single prop', () => {
      expectChange({
        fn: () => tc.setState({ fallbackText: 'new text' }),
        of: () => tc.getState('fallbackText'),
        from: undefined,
        to: 'new text',
      })
    })

    it('can setState with callback', () => {
      let changed = false
      expect.assertions(3)
      expectBecameTrue({
        fn: () => tc.setState({ fallbackText: 'new text' }, () => { changed = true }),
        of: () => changed,
      })
    })

    const helperPropTypes = {
      mounted: '[object Object]',
      rendered: '<div class="test">no text</div>',
      shallowed: '[object Object]',
      instance: '[object Object]',
    }

    Object.keys(helperPropTypes).forEach((key) => {
      // @ts-ignore
      const expected = helperPropTypes[key]
      // @ts-ignore
      const current = String(tc[key])
      it(`has a prop "${key}" with "${expected}"`, () => {
        expect(current).toBe(expected)
      })

      it('uses same object instance in future calls', () => {
        // @ts-ignore
        expect(tc[key] === tc[key]).toBe(true)
      })
    })
  })
})

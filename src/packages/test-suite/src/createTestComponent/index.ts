
import React, { Attributes, ComponentClass, FunctionComponent, ReactElement } from 'react'

import Adapter from 'enzyme-adapter-react-16'
import Enzyme, {
  mount,
  MountRendererProps,
  ReactWrapper,
  render,
  shallow,
  ShallowRendererProps,
  ShallowWrapper,
} from 'enzyme';

Enzyme.configure({ adapter: new Adapter() })

type Scope<P> = ShallowWrapper<P> & ReactWrapper<P> & cheerio.Cheerio

type ScopeType = 'shallow' | 'mount' | 'render'

type Options = {
  connected?: boolean,
  scopeType?: ScopeType,
}

type TestProps<P> = {
  instance?: ReactElement<P>,
  mountComponent?: ReactWrapper<P>,
  mounted?: ReactWrapper<P>,
  renderComponent?: cheerio.Cheerio,
  rendered?: cheerio.Cheerio,
  scope: Scope<P>,
  shallowComponent?: ShallowWrapper<P>,
  shallowed?: ShallowWrapper<P>,
}

type TestActions = {
  getProp: Function,
  getProps: Function,
  getState: Function,
  remount: Function,
  setProps: Function,
  setState: Function,
}

type TestComponent<P> = TestProps<P> & TestActions

const createElement = <P extends {}>(
  type: FunctionComponent<P> | ComponentClass<P>,
  props?: Attributes & P | null,
): ReactElement<P> => {
  // @todo How about connected ones
  return React.createElement(type, props)
}

const createScope = <P extends {}>(
  scopeType: ScopeType,
  type: FunctionComponent<P> | ComponentClass<P>,
  props?: Attributes & P | null,
  options: Options = {},
): Scope<P> => {
  const element = createElement(type, props)
  let scope
  if (scopeType === 'mount') {
    return mount(element, options as MountRendererProps) as Scope<P>
  }

  if (scopeType === 'render') {
    return render(element) as Scope<P>
  }

  scope = shallow(element, options as ShallowRendererProps)
  /* @todo connect
  if (options.connected) {
    // react-redux's connect now uses React.memo() to wrap connected component
    // so there's technically two levels of wrapping going on.
    scope = scope.dive().dive()
  }
  */
  return scope as Scope<P>
}

const isClassComponent = (target: any) => !!target.prototype?.isReactComponent

export default <P extends {}>(
  type: FunctionComponent<P> | ComponentClass<P>,
  props?: Attributes & P | null,
  options?: Options,
): TestComponent<P> => {
  const scopeType = options?.scopeType || (isClassComponent(type) ? 'shallow' : 'mount')

  const component:TestProps<P> = {
    scope: createScope(scopeType, type, props, options),
  }

  Object.defineProperty(component, 'mounted', {
    get: () => {
      if (!component.mountComponent) {
        component.mountComponent = createScope('mount', type, props, options) as ReactWrapper<P>
      }
      return component.mountComponent
    },
  })
  Object.defineProperty(component, 'rendered', {
    get: () => {
      if (!component.renderComponent) {
        component.renderComponent = createScope('render', type, props, options) as cheerio.Cheerio
      }
      return component.renderComponent
    },
  })
  Object.defineProperty(component, 'shallowed', {
    get: () => {
      if (!component.shallowComponent) {
        component.shallowComponent =
          createScope('shallow', type, props, options) as ShallowWrapper<P>
      }
      return component.shallowComponent
    },
  })

  Object.defineProperty(component, 'instance', {
    get: () => (component.scope as ShallowWrapper<P>).instance(),
  })

  Object.defineProperty(component, 'remount', {
    value: () => {
      if (scopeType === 'mount') {
        (component.scope as ReactWrapper<P>).unmount()
        return (component.scope as ReactWrapper<P>).mount()
      }

      if (component.mountComponent) {
        (component.mounted as ReactWrapper<P>).unmount()
        return (component.mounted as ReactWrapper<P>).mount()
      }
      return component.mounted
    },
  })

  Object.defineProperty(component, 'getProps', {
    value: () => scopeType === 'mount'
      ? (component.scope as ReactWrapper<P>).props()
      : (component.scope as ShallowWrapper<P>).instance().props,
  })

  Object.defineProperty(component, 'getProp', {
    value: (key: string) => scopeType === 'mount'
      ? (component.scope as ReactWrapper<P>).prop(key)
      // @ts-ignore
      : (component.scope as ShallowWrapper<P>).instance().props[key],
  })

  Object.defineProperty(component, 'setProps', {
    value: (p:P) => (component.scope as ShallowWrapper<P>).setProps(p),
  })

  Object.defineProperty(component, 'getState', {
    value: (key: string) => (
      key
        // @ts-ignore
        ? (component.scope as ShallowWrapper<P>).state()[key]
        : (component.scope as ShallowWrapper<P>).state()
    ),
  })

  Object.defineProperty(component, 'setState', {
    value: (state: {}, callback?: () => void) => (
      callback
        ? (component.scope as ShallowWrapper<P>).setState(state, callback)
        : (component.scope as ShallowWrapper<P>).setState(state)
    ),
  })

  const beforeAndAfterTests = () => {
    beforeEach(() => {
      component.scope = createScope(scopeType, type, props, options)
      delete component.mountComponent
      delete component.renderComponent
      delete component.shallowComponent
    })

    afterEach(() => {
      if (scopeType === 'mount') {
        (component.scope as ReactWrapper<P>).unmount()
      }
      component.mountComponent?.unmount()
    })
  }

  beforeAndAfterTests()

  return component as TestComponent<P>
}

import { ObservedValueOf, BehaviorSubject, } from 'rxjs'

export const checkDescriptor = <T, K extends keyof T>(target: T, propertyKey: K) => {
  const descriptor = Object.getOwnPropertyDescriptor(target, propertyKey)

  if (descriptor && !descriptor.configurable) {
    throw new TypeError(`property ${propertyKey} is not configurable`)
  }

  return {
    oGetter: descriptor && descriptor.get,
    oSetter: descriptor && descriptor.set,
  }
}


export function ObservableInput<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T = any,
  OK extends keyof T = keyof T,
  K extends keyof T = keyof T
>(propertyKey?: K | boolean, initialValue?: ObservedValueOf<T[OK]>) {
  return (target: T, oPropertyKey: OK) => {
    if (!(oPropertyKey as string).endsWith('$')) {
      throw new TypeError(
        `property ${oPropertyKey} should be an observable and its name should end with $`,
      )
    }

    const { oGetter, oSetter } = checkDescriptor(target, oPropertyKey)

    if (oGetter || oSetter) {
      throw new TypeError(
        `property ${oPropertyKey} should not define getter or setter`,
      )
    }

    const symbol = Symbol('private property hook')

    // eslint-disable-next-line @typescript-eslint/no-type-alias
    type OT = ObservedValueOf<T[OK]>

    type Mixed = T & {
      [symbol]?: BehaviorSubject<OT | undefined>
    } & Record<OK, BehaviorSubject<OT>>

    Object.defineProperty(target, oPropertyKey, {
      enumerable: true,
      configurable: true,
      get(this: Mixed) {
        return (
          this[symbol] || (this[symbol] = new BehaviorSubject(initialValue))
        )
      },
      set(this: Mixed, value: OT) {
        this[oPropertyKey].next(value)
      },
    })

    if (!propertyKey) {
      return
    }

    if (propertyKey === true) {
      propertyKey = (oPropertyKey as string).replace(/\$+$/, '') as K
    }

    if (Object.getOwnPropertyDescriptor(target, propertyKey)) {
      throw new TypeError(
        `property ${propertyKey} should not define any descriptor`,
      )
    }

    Object.defineProperty(target, propertyKey, {
      enumerable: true,
      configurable: true,
      get(this: Mixed) {
        return this[oPropertyKey].getValue()
      },
      set(this: Mixed, value: OT) {
        this[oPropertyKey].next(value)
      },
    })
  }
}


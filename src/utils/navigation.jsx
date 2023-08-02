import * as React from "react"
import { hideSpinner } from "../core/component"

export const navigationRef = React.createRef()

export const navigate = ({ screen, params }) =>
  navigationRef.current?.navigate(screen, params)

export const navigateReducer = ({ stack, screen, params }) => {
  if (stack) {
    setTimeout(() => navigationRef.current?.navigate(stack, { screen, params }))
  } else {
    setTimeout(() => navigationRef.current?.navigate(screen, params))
  }
}

export const navigateStack = (stack, screen, params) =>
  navigationRef.current?.navigate(stack, { screen, params })

export const navigateHideSpinner = ({ screen, params }) => {
  setTimeout(() => {
    navigationRef.current?.navigate(screen, params)
    hideSpinner()
  })
}

export const navigateStackHideSpinner = (stack, screen, params) => {
  setTimeout(() => {
    navigationRef.current?.navigate(stack, { screen, params })
    hideSpinner()
  })
}

export const goBack = () => {
  navigationRef.current?.goBack()
}

export const goResetRoot = ({ screen, params }) =>
  navigationRef.current?.resetRoot({
    index: 0,
    routes: [{ name: screen, params }]
  })

export const resetRootReducer = ({ index, routes }) => {
  setTimeout(() => {
    navigationRef.current?.resetRoot({ index, routes })
  })
}

export const resetRootReducerHideSpinner = ({ index, routes }) => {
  setTimeout(() => {
    navigationRef.current?.resetRoot({ index, routes })
    hideSpinner()
  })
}

export const navigateLogOut = () =>
  setTimeout(() => {
    hideSpinner()
  }, 1000)

export const navigateIdleLogOut = () => {
  setTimeout(() => {
    hideSpinner()
  }, 1000)
}

export const resetRootThenNavigateReducer = (stack, screen) => {
  resetRootReducer({
    index: 0,
    routes: [
      {
        name: stack,
        // props state => for child screen
        state: {
          routeNames: [screen],
          routes: [{ name: screen }]
        }
      }
    ]
  })
}
import { useEffect, useState } from "react"
import { AppState } from "react-native"

export function useAppState() {
  const currentState = AppState.currentState
  const [appState, setAppState] = useState(currentState)

  useEffect(() => {
    function onChange(newState) {
      setAppState(newState)
    }

    const subscription = AppState.addEventListener("change", onChange)

    return () => {
      subscription.remove()
    }
  }, [])

  return appState
}

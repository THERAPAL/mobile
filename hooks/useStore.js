import {create} from "zustand"

export const useStore = create((set, get) => ({
  currentWelcomeScreen: 'first',

  setCurrWelcomeScreen: (current) => {
    set({
      currentWelcomeScreen: current
    })
  }
}))
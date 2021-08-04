import React, { createContext, useState, FC } from 'react'

export const Context = createContext<any>(undefined)

export const UIProvider: FC = ({ children }) => {
  const [showTabs, setShowTabs] = useState(true)

  let state = {
    showTabs,
    setShowTabs,
  }

  return <Context.Provider value={state}>{children}</Context.Provider>
}

export default Context

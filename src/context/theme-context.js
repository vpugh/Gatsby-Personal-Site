import React, { useState } from "react"

const defaultState = {
  color: "",
  setColor: () => {},
}

const ThemeContext = React.createContext(defaultState)

const ThemeProvider = props => {
  const [color, setColor] = useState()
  const { children } = props

  return (
    <ThemeContext.Provider
      value={{
        color,
        setColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext

export { ThemeProvider }

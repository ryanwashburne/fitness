import React, { createContext, useState } from 'react'

const Context = createContext()
export const useContext = () => React.useContext(Context)
export const StateProvider = ({ children }) => {
  const [data, setData] = useState()
  const [slide, setSlide] = useState(-1)
  const [day, setDay] = useState(1)
  const [week, setWeek] = useState(1)
  return (
    <Context.Provider
      value={{
        data,
        setData,
        slide,
        setSlide,
        day,
        setDay,
        week,
        setWeek,
      }}
    >
      {children}
    </Context.Provider>
  )
}

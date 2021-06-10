import React from 'react'

const StateContext = React.createContext()
export const useState = () => React.useContext(StateContext)
export const StateProvider = ({ children }) => {
  const [selectedWeek, setWeek] = React.useState(
    Number(window.localStorage.getItem('selected_week') || -1),
  )
  const [selectedDay, setDay] = React.useState(
    Number(window.localStorage.getItem('selected_day') || -1),
  )
  const [selectedForm, setForm] = React.useState(
    window.localStorage.getItem('selected_form') || '',
  )
  const [selectedBar, setBar] = React.useState(
    window.localStorage.getItem('selected_bar') || '',
  )

  const handleWeek = (e) => {
    const value = Number(e.target.value)
    window.localStorage.setItem('selected_week', value)
    setWeek(value)
  }

  const handleDay = (e) => {
    const value = Number(e.target.value)
    window.localStorage.setItem('selected_day', value)
    setDay(value)
  }

  const handleForm = (e) => {
    const value = e.target.value
    window.localStorage.setItem('selected_form', value)
    setForm(value)
  }

  const handleBar = (e) => {
    const value = e.target.value
    window.localStorage.setItem('selected_bar', value)
    setBar(value)
  }

  return (
    <StateContext.Provider
      value={{
        selectedWeek,
        handleWeek,
        selectedDay,
        handleDay,
        selectedForm,
        handleForm,
        selectedBar,
        handleBar,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

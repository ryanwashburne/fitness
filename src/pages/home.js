import React, { useState } from 'react'
import { useIdentityContext } from 'react-netlify-identity'

import Layout from '../components/layout'
import Week from '../components/week'
import { WEEKS, DAYS } from '../utils/constants'

export default () => {
  const {
    user: { user_metadata },
  } = useIdentityContext()
  const [selectedWeek, setWeek] = useState(
    Number(window.localStorage.getItem('selected_week') || -1),
  )
  const [selectedDay, setDay] = useState(
    Number(window.localStorage.getItem('selected_day') || -1),
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
    console.log(value)
  }

  console.log(selectedWeek, selectedDay)

  return (
    <Layout title="Home">
      <div className="mb-16">
        <select
          className="form-select text-black"
          value={selectedWeek}
          onChange={handleWeek}
        >
          <option value={-1}>All Weeks</option>
          {WEEKS.map((_, i) => {
            return (
              <option value={i} key={i}>
                Week {i + 1}
              </option>
            )
          })}
        </select>
        <select
          className="form-select text-black"
          value={selectedDay}
          onChange={handleDay}
        >
          <option value={-1}>All Days</option>
          {DAYS.map((_, i) => {
            return (
              <option value={i} key={i}>
                Day {i + 1}
              </option>
            )
          })}
        </select>
      </div>
      {user_metadata?.info ? (
        <div>
          {selectedWeek === -1 ? (
            WEEKS.map((_, i) => {
              return <Week key={i} weekNumber={i} dayNumber={selectedDay} />
            })
          ) : (
            <Week weekNumber={selectedWeek} dayNumber={selectedDay} />
          )}
        </div>
      ) : (
        <p>Data not added to profile</p>
      )}
    </Layout>
  )
}

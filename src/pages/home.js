import React, { useState } from 'react'
import { useIdentityContext } from 'react-netlify-identity'

import Layout from '../components/layout'
import Week from '../components/week'
import { WEEKS, DAYS } from '../utils/constants'

export default () => {
  const {
    user: { user_metadata },
  } = useIdentityContext()
  const [selectedWeek, setWeek] = useState(-1)
  const [selectedDay, setDay] = useState(-1)

  return (
    <Layout title="Home">
      <div className="mb-16">
        <select
          className="form-select text-black"
          value={selectedWeek}
          onChange={(e) => setWeek(Number(e.target.value))}
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
          onChange={(e) => setDay(Number(e.target.value))}
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

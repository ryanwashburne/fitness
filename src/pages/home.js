import React from 'react'
import { useIdentityContext } from 'react-netlify-identity'

import Layout from '../components/layout'
import Week from '../components/week'
import {
  WEEKS,
  DAYS,
  BULKING,
  CUTTING,
  OLYMPIC,
  STANDARD,
} from '../utils/constants'
import { useState } from '../utils/hooks'

export default () => {
  const {
    user: { user_metadata },
  } = useIdentityContext()
  const {
    selectedWeek,
    handleWeek,
    selectedDay,
    handleDay,
    selectedForm,
    handleForm,
    selectedBar,
    handleBar,
  } = useState()

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
        <select
          className="form-select text-black"
          value={selectedForm}
          onChange={handleForm}
        >
          <option value={BULKING}>Bulking</option>
          <option value={CUTTING}>Cutting</option>
        </select>
        <select
          className="form-select text-black"
          value={selectedBar}
          onChange={handleBar}
        >
          <option value={OLYMPIC}>Olympic</option>
          <option value={STANDARD}>Standard</option>
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

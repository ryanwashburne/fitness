import React from 'react'

import Day from './day'
import { WEEKS, DAYS, CUTTING, EXERCISES } from '../utils/constants'
import { useState } from '../utils/hooks'

export default ({ weekNumber, dayNumber }) => {
  const { selectedForm } = useState()
  const isCutting = selectedForm === CUTTING
  function appendRandom(e) {
    const exercises = [...e]
    if (isCutting) {
      while (exercises.length === e.length) {
        const randEx = Math.floor(Math.random() * EXERCISES.length)
        const extra = EXERCISES[randEx]
        if (!exercises.includes(extra)) {
          exercises.push(extra)
        }
      }
    }
    return exercises
  }
  const week = WEEKS[weekNumber]
  return (
    <div className="mb-16">
      <p className="text-xl mb-8">Week {weekNumber + 1}</p>
      <div className="grid xl:grid-cols-4 gap-8">
        {dayNumber === -1 ? (
          DAYS.map((exercises, i) => {
            return (
              <Day
                key={i}
                exercises={appendRandom(exercises)}
                week={week}
                dayNumber={i}
              />
            )
          })
        ) : (
          <Day
            exercises={appendRandom(DAYS[dayNumber])}
            week={week}
            dayNumber={dayNumber}
          />
        )}
      </div>
    </div>
  )
}

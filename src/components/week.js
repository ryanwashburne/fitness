import React from 'react'

import Day from './day'
import { WEEKS, DAYS } from '../utils/constants'

export default ({ weekNumber, dayNumber }) => {
  const week = WEEKS[weekNumber]
  return (
    <div className="mb-16">
      <p className="text-xl mb-8">Week {weekNumber + 1}</p>
      <div className="grid md:grid-cols-4 gap-8">
        {dayNumber === -1 ? (
          DAYS.map((excercises, i) => {
            return (
              <Day key={i} excercises={excercises} week={week} dayNumber={i} />
            )
          })
        ) : (
          <Day excercises={DAYS[dayNumber]} week={week} dayNumber={dayNumber} />
        )}
      </div>
    </div>
  )
}

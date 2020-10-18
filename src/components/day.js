import React from 'react'
import { useIdentityContext } from 'react-netlify-identity'

import { rounded } from '../utils/helpers'

export default ({ excercises, week, dayNumber }) => {
  const {
    user: { user_metadata },
  } = useIdentityContext()
  return (
    <div className="rounded-lg bg-gray-400 text-black p-2">
      <p className="text-xl mb-8">Day {dayNumber + 1}</p>
      {excercises.map((ex, k) => {
        return (
          <div key={k} className="text-center mb-12">
            <p className="italic mb-8">{ex}</p>
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="px-2">%</th>
                  <th className="px-2">Weight</th>
                  <th className="px-2">Sets</th>
                  <th className="px-2">Reps</th>
                  <th className="px-2">Side</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {week.map(({ percentage, sets, reps }, i) => {
                  const weight =
                    Number(user_metadata.info[ex]) * 0.9 * percentage * 0.01
                  return (
                    <tr
                      className={`group hover:bg-yellow-800 bg-gray-${
                        i % 2 === 0 ? 9 : 8
                      }00`}
                      key={i}
                    >
                      <td className="p-4 border">{percentage}%</td>
                      <td className="p-4 border">{rounded(weight, 2.5)}</td>
                      <td className="p-4 border">{sets}</td>
                      <td className="p-4 border">{reps}</td>
                      <td className="group-hover:bg-yellow-600 p-4 border">
                        {rounded((weight - 15) / 2, 5)}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )
      })}
    </div>
  )
}

import React from 'react'
import { useIdentityContext } from 'react-netlify-identity'

import Layout from '../components/layout'
import { WEEKS, DAYS } from '../utils/constants'
import { rounded } from '../utils/helpers'

export default () => {
  const {
    user: { user_metadata },
  } = useIdentityContext()

  return (
    <Layout title="Home">
      {user_metadata?.info ? (
        <div>
          {WEEKS.map((week, i) => {
            return (
              <div key={i} className="mb-16">
                <p className="text-xl mb-8">Week {i + 1}</p>
                <div className="grid md:grid-cols-3 gap-8">
                  {DAYS.map((excercises, j) => {
                    return (
                      <div
                        key={j}
                        className="rounded-lg bg-gray-400 text-black p-6"
                      >
                        <p className="text-xl mb-8">Day {j + 1}</p>
                        {excercises.map((ex, k) => {
                          return (
                            <div key={k} className="text-center mb-12">
                              <p className="italic mb-8">{ex}</p>
                              <table className="table-auto w-full">
                                <thead>
                                  <tr>
                                    <th className="px-4">%</th>
                                    <th className="px-4">Weight</th>
                                    <th className="px-4">Sets</th>
                                    <th className="px-4">Reps</th>
                                    <th className="px-4">Side</th>
                                  </tr>
                                </thead>
                                <tbody className="text-white">
                                  {week.map(({ percentage, sets, reps }, i) => {
                                    const weight =
                                      Number(user_metadata.info[ex]) *
                                      0.9 *
                                      percentage *
                                      0.01
                                    return (
                                      <tr
                                        className={`group hover:bg-yellow-800 bg-gray-${
                                          i % 2 === 0 ? 9 : 8
                                        }00`}
                                        key={i}
                                      >
                                        <td className="p-4 border">
                                          {percentage}%
                                        </td>
                                        <td className="p-4 border">
                                          {rounded(weight, 2.5)}
                                        </td>
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
                  })}
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <p>Data not added to profile</p>
      )}
    </Layout>
  )
}

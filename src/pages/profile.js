import React, { useState } from 'react'
import { useIdentityContext } from 'react-netlify-identity'

import Layout from '../components/layout'
import { EXERCISES } from '../utils/constants'

const Form = ({ initial, updateUser }) => {
  const [fields, setFields] = useState(initial)

  async function handleSubmit(e) {
    e.preventDefault()
    updateUser(fields)
  }

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(fields).map((key, i) => {
        const value = fields[key]
        return (
          <div key={i}>
            <label htmlFor={key} className="block">
              {key}
            </label>
            <input
              className="form-input bg-gray-800"
              name={key}
              value={value}
              onChange={(e) => setFields({ ...fields, [key]: e.target.value })}
            />
          </div>
        )
      })}
      <button className="mt-4 btn" type="submit">
        Submit
      </button>
    </form>
  )
}

export default () => {
  const {
    user: { user_metadata },
    updateUser,
  } = useIdentityContext()

  const oldData = user_metadata?.info
  const [userData, setUserData] = useState(oldData)
  const [disabled, setDisabled] = useState(true)

  const handleChange = async (field, value, adding) => {
    setDisabled(false)
    let num = value
    if (adding) {
      num = Number(userData[field]) + value
    }
    const newData = { ...userData, [field]: String(num) }
    setUserData(newData)
  }

  async function saveChanges(newData) {
    const previous = user_metadata?.prev || []
    await updateUser({
      data: {
        info: newData || userData,
        prev: [oldData, ...previous],
      },
    })
  }

  const Dashboard = ({ prev }) => {
    return (
      <div>
        <div className="mb-8">
          <p className="text-xl">1 Rep Max</p>
          <hr className="my-4" />
          {Object.keys(userData).map((key, i) => {
            const value = userData[key]
            return (
              <form
                key={i}
                className="mb-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor={key} className="text-xs block">
                  {key}
                </label>
                <input
                  className="form-input bg-gray-800"
                  name={key}
                  value={value}
                  onChange={(e) => handleChange(key, e.target.value)}
                />
                <button
                  className="inline btn ml-4"
                  onClick={() => handleChange(key, 5, true)}
                >
                  +5
                </button>
                <button
                  className="inline btn ml-4"
                  onClick={() => handleChange(key, -5, true)}
                >
                  -5
                </button>
              </form>
            )
          })}
          <button
            className="mt-2 btn"
            onClick={() => saveChanges()}
            disabled={disabled}
          >
            Save Changes
          </button>
        </div>
        <div className="mb-8">
          <p className="text-xl">Training Max</p>
          <hr className="my-4" />
          {Object.keys(userData).map((key, i) => {
            const value = userData[key]
            return (
              <div key={i}>
                <p>
                  {key}: {Number(value) * 0.9}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mb-8">
          <p className="text-xl">Previous</p>
          <hr className="my-4" />
          {prev.map((stats, i) => {
            return (
              <p key={i} className="text-sm">
                {Object.keys(stats).map((key, j) => {
                  return (
                    <span key={j} className="pr-4">
                      <b>{key}</b>: {stats[key]}
                    </span>
                  )
                })}
              </p>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <Layout title="Profile">
      {userData ? (
        <div>
          <Dashboard
            data={user_metadata.info}
            prev={user_metadata?.prev || []}
          />
          {/* <div>
            <button
              className="mt-4 btn"
              onClick={async () => {
                await saveChanges(null)
                window.location.reload()
              }}
            >
              Clear ALL Data
            </button>
          </div> */}
        </div>
      ) : (
        <div>
          <Form
            initial={
              userData ||
              EXERCISES.reduce((prev, curr) => {
                prev[curr] = 0
                return prev
              }, {})
            }
            updateUser={async (data) => {
              await saveChanges(data)
              window.location.reload()
            }}
          />
        </div>
      )}
    </Layout>
  )
}

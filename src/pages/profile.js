import React, { useState } from 'react'
import { useIdentityContext } from 'react-netlify-identity'

import Layout from '../components/layout'
import { EXCERCISES } from '../utils/constants'

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

  const [userData, setUserData] = useState(user_metadata?.info)
  const [editing, setEditing] = useState(false)

  async function handleInfo(info) {
    await updateUser({
      data: {
        info,
      },
    })
    window.location.reload()
  }

  const Dashboard = () => {
    return (
      <div>
        <div className="mb-8">
          <p className="text-xl">1 Rep Max</p>
          <hr className="my-4" />
          {Object.keys(userData).map((key, i) => {
            const value = userData[key]
            return (
              <div key={i} className="mb-2">
                <label htmlFor={key} className="text-xs block">
                  {key}
                </label>
                <input
                  className="form-input bg-gray-800"
                  name={key}
                  value={value}
                  disabled
                />
              </div>
            )
          })}
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
      </div>
    )
  }

  return (
    <Layout title="Profile">
      {userData ? (
        <div>
          <Dashboard data={user_metadata.info} />
          <div>
            <button className="btn" onClick={() => setEditing(!editing)}>
              {editing ? 'Save Data' : 'Edit Data'}
            </button>
          </div>
          <div>
            <button className="mt-8 btn" onClick={() => handleInfo(null)}>
              Clear ALL Data
            </button>
          </div>
        </div>
      ) : (
        <div>
          <Form
            initial={
              userData ||
              EXCERCISES.reduce((prev, curr) => {
                prev[curr] = 0
                return prev
              }, {})
            }
            updateUser={(data) => handleInfo(data)}
          />
        </div>
      )}
    </Layout>
  )
}

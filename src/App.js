import React, { useState } from 'react'
import {
  IdentityModal,
  useIdentityContext,
} from 'react-netlify-identity-widget'
import 'react-netlify-identity-widget/styles.css'
import '@reach/tabs/styles.css'

// import { useContext } from './hooks/useContext'
// import { WEEK_1, WEEK_2, WEEK_3 } from './utils/constants'

const Home = () => {
  const { logoutUser } = useIdentityContext()
  // const { data, setData, slide } = useContext()
  // async function initialize() {
  //   const response = await fetch('/.netlify/functions/loadData')
  //   const data = await response.json()
  //   setData(data.payload)
  // }
  // useEffect(() => {
  //   initialize()
  // }, [])
  return (
    <div>
      <p>Home</p>
      <button
        className="btn bg-red-500"
        onClick={async () => await logoutUser()}
      >
        Log out
      </button>
    </div>
  )
}

export default () => {
  const [dialog, setDialog] = useState(false)
  const { isLoggedIn } = useIdentityContext()
  return isLoggedIn ? (
    <Home />
  ) : (
    <div className="h-screen flex flex-col justify-center items-center">
      <button className="btn" onClick={() => setDialog(true)}>
        Log in
      </button>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
      />
    </div>
  )
}

import React, { useState } from 'react'
import {
  IdentityModal,
  useIdentityContext,
} from 'react-netlify-identity-widget'
import 'react-netlify-identity-widget/styles.css'
import '@reach/tabs/styles.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { HomePage, ProfilePage } from './pages'
import { StateProvider } from './utils/hooks'

const Auth = () => {
  const [dialog, setDialog] = useState(false)
  return (
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

const AuthRoute = ({ component, publicComponent, ...props }) => {
  const { isLoggedIn } = useIdentityContext()
  if (!isLoggedIn && !publicComponent) {
    return <Redirect to="/" />
  }
  return (
    <Route component={isLoggedIn ? component : publicComponent} {...props} />
  )
}

export default () => {
  return (
    <StateProvider>
      <Router>
        <Switch>
          <AuthRoute
            exact
            path="/"
            component={HomePage}
            publicComponent={Auth}
          />
          <AuthRoute exact path="/profile" component={ProfilePage} />
        </Switch>
      </Router>
    </StateProvider>
  )
}

import React, { useState } from 'react'
import LoginScreen from './LoginScreen'
import WelcomeSCreen from './WelcomeSCreen'

function LoginPage() {
  const gotoLoginScreen = () => {
    setpage(<LoginScreen />)
  }
  const [page, setpage] = useState(
    <WelcomeSCreen gotoLoginScreen={gotoLoginScreen} />
  )

  return page
}

export default LoginPage

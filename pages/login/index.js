import React, { useEffect, useState } from 'react'
import LoginPageD from '../../components/login/desktop/LoginPageD'
import LoginPage from '../../components/login/mobile/LoginPageM'

function index() {
  const [mobile, setmobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth < 768) {
      setmobile(true)
    } else {
      setmobile(false)
    }
  }, [])
  return mobile ? <LoginPage /> : <LoginPageD />
}

export default index

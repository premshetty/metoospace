import React, { useEffect, useState } from 'react'
import RegisterDesk from '../../components/register/RegisterDesk'
import RegisterMob from '../../components/register/RegisterMob'

function index() {
  const [mobile, setmobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth < 768) {
      setmobile(true)
    } else {
      setmobile(false)
    }
  }, [])
  return mobile ? <RegisterMob /> : <RegisterDesk />
}

export default index

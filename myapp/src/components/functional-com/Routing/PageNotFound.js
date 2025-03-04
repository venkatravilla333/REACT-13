import React, { useEffect } from 'react'

import {Navigate, useNavigate} from 'react-router-dom'

function PageNotFound() {
  var navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/home')
    }, 1000)
  }, [])
  return (
    // <Navigate to = "/home" />
    <h2>Page not found</h2>
  )
}

export default PageNotFound
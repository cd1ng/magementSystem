import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'

const Authority = memo(() => {
  return (
    <Outlet />
  )
})

export default Authority
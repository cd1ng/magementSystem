import { memo } from 'react'
import { Outlet } from 'react-router-dom'
const Project = memo(() => {
  return (
    <Outlet />
  )
})

export default Project
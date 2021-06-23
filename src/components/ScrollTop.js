import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    const dontScrollRoutes = []
    if (!dontScrollRoutes.includes(pathname)) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [pathname])

  return null
}

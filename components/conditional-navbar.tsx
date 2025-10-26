'use client'

import { usePathname } from 'next/navigation'
import { Navbar } from './navigation/navbar'

export function ConditionalNavbar() {
  const pathname = usePathname()
  
  // Hide navbar on auth pages
  const hideNavbar = pathname === '/login' || pathname === '/register'
  
  if (hideNavbar) {
    return null
  }
  
  return <Navbar />
}
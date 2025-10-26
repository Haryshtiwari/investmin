'use client'

import { usePathname } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import { Navbar } from './navigation/navbar'

export function ConditionalNavbar() {
  const pathname = usePathname()
  const { isLoading } = useAuth()
  
  // Hide navbar on auth pages or during authentication loading
  const hideNavbar = pathname === '/login' || pathname === '/register' || isLoading
  
  if (hideNavbar) {
    return null
  }
  
  return <Navbar />
}
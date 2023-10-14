'use client'

import { SessionProvider} from 'next-auth/react';

interface AuthContextPros{
    children: React.ReactNode
}
const AuthContext = ({
    children
}: AuthContextPros) => {
  return (
    <SessionProvider>{ children} </SessionProvider>
  )
}

export default AuthContext
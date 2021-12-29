import React, { createContext, ReactNode, useContext, useState } from 'react'
import * as AuthSession from 'expo-auth-session'

import {
  REDIRECT_URI,
  SCOPE,
  RESPONSE_TYPE,
  CLIENT_ID,
  CDN_IMAGE
} from '../configs'
import { api } from '../services/api'

type User = {
  id: string
  username: string
  firstName: string
  avatar: string
  email: string
  token: string
}

type AuthContextData = {
  user: User
  SignIn: () => Promise<void>
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User)
  const [loading, setLoading] = useState(false)

  async function SignIn() {
    try {
      setLoading(true)

      // const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
      const authUrl = `https://discord.com/api/oauth2/authorize?client_id=925804459823595540&redirect_uri=https%3A%2F%2Fauth.expo.io%2Fgameplay&response_type=code&scope=identify%20email%20connections%20guilds`

      const response = AuthSession.startAsync({
        authUrl
      })

      console.log(response, 'resposta')
    } catch {
      throw new Error('Não foi possivel autenticar')
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        SignIn
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }

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
  loading: boolean
  SignIn: () => Promise<void>
}

type AuthProviderProps = {
  children: ReactNode
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    code: string
  }
}

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User)
  const [loading, setLoading] = useState(false)

  async function SignIn() {
    try {
      setLoading(true)

      // const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
      const authUrl = `https://discord.com/api/oauth2/authorize?client_id=925804459823595540&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40anonymous%2Fgameplay-1a56e5ee-bf21-41e4-a5ce-10d423b770fa&response_type=code&scope=identify%20email%20connections%20guilds`

      const { params, type } = (await AuthSession.startAsync({
        authUrl
      })) as AuthorizationResponse

      if (type === 'success') {
        console.log('entrou')
        api.defaults.headers.authorization = `Bearer JjSyHN7h6p61SLIY9h-JOi5s7A-rRx6b`

        const userInfo = await api.get('/users/@me')
        console.log(userInfo)
      }
      // api.defaults.headers.authorization = `Bearer ${params.code}`
      //   api.defaults.headers.common['Authorization'] = `Bearer ${params.code}`

      //   const userInfo = await api.get('/users/@me')

      //   console.log(userInfo, 'userinfo')

      //   setLoading(false)
      // }
    } catch {
      throw new Error('Não foi possivel autenticar')
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
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

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
    access_token: string
  }
}

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User)
  const [loading, setLoading] = useState(false)

  async function SignIn() {
    try {
      setLoading(true)

      const authUrl = `https://discord.com/api/oauth2/authorize?client_id=925804459823595540&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40anonymous%2Fgameplay-09468848-060c-47f3-8da3-8287c7da882a&response_type=token&scope=identify%20email%20connections%20guilds`

      const { params, type } = (await AuthSession.startAsync({
        authUrl
      })) as AuthorizationResponse

      if (type === 'success') {
        console.log('entrou')
        api.defaults.headers.authorization = `Bearer ${params.access_token}`

        const userInfo = await api.get('/users/@me')

        const firstName = userInfo.data.username.split(' ')[0]
        userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`

        setUser({ ...userInfo.data, firstName, token: params.access_token })
        console.log(firstName)

        setLoading(false)
      } else {
        setLoading(false)
      }
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

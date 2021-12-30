import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  Alert,
  ActivityIndicator,
  Button
} from 'react-native'
import IlustrationImg from '../../assets/illustration.png'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

import { ButtonIcon } from '../../components/ButtonIcon'
import { Background } from '../../components/Background'
import { useAuth } from '../../hooks/auth'
import { theme } from '../../global/styles/theme'
import { ButtonAdd } from '../../components/ButtonAdd'
import { ButtonIcon2 } from '../../components/ButtonIcon2'

export function SignIn() {
  const { user, SignIn, loading } = useAuth()

  const handleSignIn = async () => {
    try {
      await SignIn()
    } catch (error: any) {
      Alert.alert('Error:', error.message)
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IlustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se{`\n`}e organize suas{`\n`}
            jogatinas
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games{`\n`}
            favoritos com seus amigos{`\n`}
          </Text>

          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon2 title="Entrar com Discord" onPress={handleSignIn} />
          )}
        </View>
      </View>
    </Background>
  )
}

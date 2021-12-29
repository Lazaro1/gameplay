import React, { useState } from 'react'
import { View, Text, Image, Alert } from 'react-native'
import IlustrationImg from '../../assets/illustration.png'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

import { ButtonIcon } from '../../components/ButtonIcon'
import { Background } from '../../components/Background'
import { useAuth } from '../../hooks/auth'

export function SignIn() {
  const { user, SignIn } = useAuth()

  const handleSignIn = async () => {
    try {
      await SignIn()
    } catch (error) {
      Alert.alert('error')
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
          <ButtonIcon title={'Entrar com Discord'} onPress={handleSignIn} />
        </View>
      </View>
    </Background>
  )
}

import { useState } from 'react'
import { View, Text, Image, StatusBar } from 'react-native'
import { ButtonIcon } from '../../components/ButtonIcon'
import IlustrationImg from '../../assets/illustration.png'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

export function SignIn() {
  const navigation = useNavigation()

  function handleSignIn() {
    navigation.navigate('Home')
  }

  return (
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
        <ButtonIcon
          title={'Entrar com Discord'}
          activeOpacity={0.7}
          onPress={handleSignIn}
        />
      </View>
    </View>
  )
}

import React from 'react'
import { Text, View } from 'react-native'

import { Avatar } from '../../components/Avatar'
import { Category } from '../../components/Category'

import { styles } from './styles'

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/Lazaro1.png" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá</Text>
          <Text style={styles.username}>Lázaro</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  )
}

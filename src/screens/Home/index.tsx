import React from 'react'
import { View } from 'react-native'

import { Profile } from '../Profile'
import { styles } from './styles'

export function Home() {
  return (
    <View>
      <View style={styles.header}>
        <Profile />
      </View>
    </View>
  )
}

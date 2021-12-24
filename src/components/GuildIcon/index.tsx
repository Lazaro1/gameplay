import React from 'react'
import { Image } from 'react-native'
import { styles } from './styles'

export function GuildIcon() {
  const uri =
    'https://pbs.twimg.com/profile_images/1392925163969200136/wNZYmQXx_400x400.jpg'
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />
}

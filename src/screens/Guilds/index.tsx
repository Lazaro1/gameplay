import React from 'react'
import { Text, View, FlatList, FlatListProps } from 'react-native'
import { GuildProps } from '../../components/Appointment'
import { Guild } from '../../components/Guild'
import { ListDivider } from '../../components/ListDivider'

import { styles } from './styles'

type Props = {
  handleGuildSelected: (guild: GuildProps) => void
}

export function Guilds({ handleGuildSelected }: Props) {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'null',
      owner: true
    },
    {
      id: '2',
      name: 'Lendários',
      icon: 'null',
      owner: true
    },
    {
      id: '3',
      name: 'Lendários',
      icon: 'null',
      owner: true
    },
    {
      id: '4',
      name: 'Lendários',
      icon: 'null',
      owner: true
    },
    {
      id: '5',
      name: 'Lendários',
      icon: 'null',
      owner: true
    },
    {
      id: '6',
      name: 'Lendários',
      icon: 'null',
      owner: true
    },
    {
      id: '7',
      name: 'Lendários',
      icon: 'null',
      owner: true
    }
  ]
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelected(item)} />
        )}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
        ItemSeparatorComponent={() => <ListDivider isCenter />}
        ListHeaderComponent={() => <ListDivider isCenter />}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
      />
    </View>
  )
}

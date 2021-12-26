import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Text, View, FlatList } from 'react-native'
import { Appointments } from '../../components/Appointment'
import { Background } from '../../components/Background'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { ListDivider } from '../../components/ListDivider'
import { ListHeader } from '../../components/ListHeader'

import { Profile } from '../../components/Profile'
import { styles } from './styles'

export function Home() {
  const [category, setCategory] = useState('')
  const navigation = useNavigation()

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendarios',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06/ as 20:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendarios',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06/ as 20:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }
  ]

  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  const handleAppointmentDetails = () => {
    navigation.navigate('AppointmentsDetails')
  }

  const handleAppointmentCreate = () => {
    navigation.navigate('AppointmentsCreate')
  }

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd onPress={handleAppointmentCreate} />
        </View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
          hasCheckBox={true}
        />
        <View style={styles.content}></View>
        <ListHeader title="Partidas agendadas" subtitle="Total 6" />

        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Appointments data={item} onPress={handleAppointmentDetails} />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Background>
  )
}

import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
//teste
import { Profile } from '../Profile'
import { styles } from './styles'

export function Home() {
  const [category, setCategory] = useState('')

  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
      <View></View>
    </View>
  )
}

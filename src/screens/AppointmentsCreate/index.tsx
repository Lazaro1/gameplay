import React, { useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Background } from '../../components/Background'
import { CategorySelect } from '../../components/CategorySelect'
import { Header } from '../../components/Header'
import { Feather } from '@expo/vector-icons'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'
import { GuildIcon } from '../../components/GuildIcon'
import { SmallInput } from '../../components/SmallInput'
import { TextArea } from '../../components/TextArea'
export function AppointmentsCreate() {
  const [category, setCategory] = useState('')

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView>
        <Header title="Agendar Partida" />
        <Text
          style={[
            styles.label,
            { marginLeft: 24, marginTop: 36, marginBottom: 18 }
          ]}
        >
          Categoria
        </Text>

        <CategorySelect
          hasCheckBox
          setCategory={setCategory}
          categorySelected={category}
        />

        <View style={styles.form}>
          <RectButton>
            <View style={styles.select}>
              {
                // <View style={styles.image} />
                <GuildIcon />
              }
              <View style={styles.selectBody}>
                <Text style={styles.label}>Selecione um servidor</Text>
              </View>
              <Feather
                name="chevron-right"
                size={18}
                color={theme.colors.heading}
              />
            </View>
          </RectButton>

          <View style={styles.field}>
            <View>
              <Text style={styles.label}>Dia e mês</Text>
              <View style={styles.column}>
                <SmallInput maxLength={2} />

                <Text style={styles.divider}> / </Text>

                <SmallInput maxLength={2} />
              </View>
            </View>

            <View>
              <Text style={styles.label}>Hora e Minuto</Text>
              <View style={styles.column}>
                <SmallInput maxLength={2} />

                <Text style={styles.divider}> : </Text>

                <SmallInput maxLength={2} />
              </View>
            </View>
          </View>
          <View style={[styles.field, { marginBottom: 12 }]}>
            <Text style={styles.label}>Descrição</Text>
            <Text style={styles.caractersLimit}>Max 100 Caracteres</Text>
          </View>
          <TextArea
            multiline
            maxLength={100}
            numberOfLines={5}
            autoCorrect={false}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

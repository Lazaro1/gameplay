import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { SignIn } from '../screens/SignIn'
import { AppointmentsDetails } from '../screens/AppointmentsDetails'
import { AppointmentsCreate } from '../screens/AppointmentsCreate'

import { theme } from '../global/styles/theme'

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {
  const { secondary80, secondary100 } = theme.colors

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: theme.colors.secondary100 } // DEU PAU NO GRADIENTE -- RESOLVER DPS - 1:15
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
      <Screen name="AppointmentsDetails" component={AppointmentsDetails} />
      <Screen name="AppointmentsCreate" component={AppointmentsCreate} />
    </Navigator>
  )
}

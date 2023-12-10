/* eslint-disable import/no-unresolved */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '@screens/Home'
import ToDoCreate from '@screens/ToDoCreate'

export default function Navigation() {
  const RootStack = createStackNavigator()
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ presentation: 'modal' }}>
        <RootStack.Screen
          name="Home"
          component={Home}
          options={{ headerTitle: 'Accueil' }}
        />
        <RootStack.Screen
          name="ToDoCreate"
          component={ToDoCreate}
          options={{ headerTitle: 'Création' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

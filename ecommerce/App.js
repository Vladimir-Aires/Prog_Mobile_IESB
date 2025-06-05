import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabRoutes from './routes/TabRoutes'

export default function App() {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  )
}


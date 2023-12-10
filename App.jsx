/* eslint-disable import/no-unresolved */
import Navigation from '@navigation/Navigation'
import React from 'react'
import { AppStateProvider } from './app/state/AppContext'

export default function App() {
  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: '#fff',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  // })
  return (
    <AppStateProvider>
      <Navigation />
    </AppStateProvider>
  )
}

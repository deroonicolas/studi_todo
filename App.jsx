/* eslint-disable import/no-unresolved */
import Navigation from '@navigation/Navigation'
import React from 'react'
import { AppStateProvider } from './app/state/AppContext'

export default function App() {
  return (
    <AppStateProvider>
      <Navigation />
    </AppStateProvider>
  )
}

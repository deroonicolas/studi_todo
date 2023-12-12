/* eslint-disable react/prop-types */
import * as React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function Title({ children }) {
  const styles = StyleSheet.create({
    title: {
      fontWeight: '600',
      fontSize: 32,
      marginBottom: 16,
    },
  })
  return <Text style={styles.title}>{children}</Text>
}

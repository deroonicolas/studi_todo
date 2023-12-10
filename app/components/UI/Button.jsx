/* eslint-disable react/prop-types */
import * as React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

export default function Button({ children, onPress }) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#007AFF',
      borderRadius: 14,
      width: '100%',
      alignItems: 'center',
      marginTop: 32,
    },
    title: {
      color: 'white',
      margin: 17,
      fontSize: 17,
      fontWeight: '600',
    },
  })
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{children}</Text>
    </TouchableOpacity>
  )
}

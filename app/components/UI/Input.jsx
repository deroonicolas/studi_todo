import * as React from 'react'
import { StyleSheet, TextInput } from 'react-native'

// eslint-disable-next-line react/prop-types
export default function Input({ value, onChange, placeholder }) {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      paddingTop: 19,
      paddingBottom: 19,
      borderBottomWidth: 1,
      fontSize: 17,
      borderBottomColor: 'rgba(60, 60, 67, 0.3)',
      marginBottom: 24,
    },
  })
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.container}
      value={value}
      onChangeText={(e) => onChange(e)}
    />
  )
}

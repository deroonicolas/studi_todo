/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Input from '@components/UI/Input'
import Button from '@components/UI/Button'
import Title from '@components/UI/Title'
import useNewToDoManage from '@hooks/useNewToDoManage'

export default function ToDoCreate() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
      backgroundColor: '#f7f3e9',
    },
  })
  const { fieldsTab, handleSubmit } = useNewToDoManage()
  return (
    <View style={styles.container}>
      <Title>Ajouter une tâche</Title>
      {fieldsTab.map(({ value, onChange, placeholder }) => (
        <Input
          key={placeholder}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ))}
      <Button onPress={handleSubmit}>Ajouter</Button>
    </View>
  )
}

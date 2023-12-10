/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
import * as React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import Button from '@components/UI/Button'
import Title from '@components/UI/Title'
import useAsyncStorageCRUD from '@hooks/useAsyncStorageCRUD'
import ToDoCard from '@components/ToDoCard'

function Home({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    },
  })
  function handlePress() {
    navigation.navigate('ToDoCreate')
  }
  const { toDoList, toDoUpdate, toDoDelete } = useAsyncStorageCRUD()
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title>Mon appli ToDo</Title>
      {toDoList
        ? toDoList.map(({ title, description, checked }, index) => {
            function handleDelete() {
              toDoDelete(index)
            }
            function handleCheckedChange() {
              toDoUpdate(index, { title, description, checked: !checked })
            }
            ;<ToDoCard
              key={index}
              title={title}
              checked={checked}
              description={description}
              handleDelete={handleDelete}
              handleCheckedChange={handleCheckedChange}
            />
          })
        : ''}
      <Button title="Go to create page" onPress={handlePress}>
        Aller à la page de création
      </Button>
    </ScrollView>
  )
}

export default Home

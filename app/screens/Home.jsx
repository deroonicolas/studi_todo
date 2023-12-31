/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
import * as React from 'react'
import { Image, StyleSheet, ScrollView } from 'react-native'
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
    image: {
      width: 72,
      height: 78,
      marginBottom: 15,
    },
  })
  function handlePress() {
    navigation.navigate('ToDoCreate')
  }
  const { toDoList, toDoUpdate, toDoDelete } = useAsyncStorageCRUD()
  // eslint-disable-next-line global-require
  const image = require('../../assets/todo.webp')
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title>Mon appli ToDo</Title>
      <Image style={styles.image} source={image} />
      {toDoList.map(({ title, description, checked }, index) => {
        function handleDelete() {
          toDoDelete(index)
        }
        function handleCheckedChange() {
          toDoUpdate(index, { title, description, checked: !checked })
        }
        return (
          <ToDoCard
            key={index}
            title={title}
            checked={checked}
            description={description}
            handleDelete={handleDelete}
            handleCheckedChange={handleCheckedChange}
          />
        )
      })}
      <Button title="Créer une nouvelle tâche" onPress={handlePress}>
        Créer une nouvelle tâche
      </Button>
    </ScrollView>
  )
}

export default Home

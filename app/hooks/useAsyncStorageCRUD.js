// eslint-disable-next-line import/no-extraneous-dependencies
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react'

import useAppContext from './useAppContext'

export default function useAsyncStorageCRUD() {
  const {
    state: { toDoList },
    dispatch,
  } = useAppContext()

  function toDoListChange(newList) {
    dispatch({ type: 'TO_DO_LIST_CHANGE', toDoList: newList })
  }

  // Read
  useEffect(() => {
    AsyncStorage.getItem('toDoList').then((savedtoDoList) => {
      if (savedtoDoList) {
        const parsedList = JSON.parse(savedtoDoList)
        toDoListChange(parsedList)
      }
    })
  }, [])

  // Create
  async function todoCreate(toDo) {
    // Nouveau tableau
    const newtoDoList = [...toDoList]
    newtoDoList.push(toDo)
    const jsonValue = JSON.stringify(newtoDoList)
    await AsyncStorage.setItem('toDoList', jsonValue)
    toDoListChange(newtoDoList)
  }

  // Update
  async function todoUpdate(index, toDo) {
    // Nouveau tableau
    const newtoDoList = [...toDoList]
    // Remplacement avec le 3eme argument
    newtoDoList.splice(index, 1, toDo)
    const jsonValue = JSON.stringify(newtoDoList)
    await AsyncStorage.setItem('toDoList', jsonValue)
    toDoListChange(newtoDoList)
  }

  // Delete
  async function todoDelete(index) {
    // Nouveau tableau
    const newtoDoList = [...toDoList]
    newtoDoList.splice(index, 1)
    const jsonValue = JSON.stringify(newtoDoList)
    await AsyncStorage.setItem('toDoList', jsonValue)
    toDoListChange(newtoDoList)
  }

  return { toDoList, todoCreate, todoUpdate, todoDelete }
}

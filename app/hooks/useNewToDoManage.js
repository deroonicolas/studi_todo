import { useState } from 'react'
import useAsyncStorageCRUD from './useAsyncStorageCRUD'

export default function useNewToDoManage() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const { toDoCreate } = useAsyncStorageCRUD()
  const fieldsTab = [
    {
      value: title,
      onChange: (e) => setTitle(e),
      placeholder: 'Nom de la tâche',
    },
    {
      value: description,
      onChange: (e) => setDescription(e),
      placeholder: 'Description (optionnel)',
    },
  ]

  // async : attendre que les résultats soient bien passés
  // pour ensuite vider titre et description
  // eslint-disable-next-line consistent-return
  async function handleSubmit() {
    if (title.length === 0) {
      // eslint-disable-next-line no-alert
      alert('La tâche doit avoir un titre')
    }
    await toDoCreate({ title, description, checked: false })
    setTitle('')
    setDescription('')
  }

  return { fieldsTab, handleSubmit }
}

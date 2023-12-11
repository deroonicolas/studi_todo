/* eslint-disable react/prop-types */
import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
// eslint-disable-next-line import/no-extraneous-dependencies
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function ToDoCard({
  title,
  description,
  handleDelete,
  checked,
  handleCheckedChange,
}) {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(60, 60, 67, 0.6)',
      margin: 2,
      width: '100%',
    },
    checkBox: {
      width: 30,
      height: 30,
      marginRight: 12,
      borderWidth: 1,
      borderColor: 'rgba(60, 60, 67, 0.6)',
      borderRadius: 4,
      paddingBottom: 16,
      marginBottom: 32,
      marginTop: 4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontWeight: '600',
      marginBottom: 0,
      fontSize: 18,
    },
    description: {
      color: 'rgba(60, 60, 67, 0.6)',
      fontSize: 16,
      marginBottom: 2,
    },
    deleteText: {
      color: 'rgba(0,122,255,1)',
      fontSize: 15,
      fontWeight: '600',
      marginBottom: 12,
    },
  })
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.checkBox} onPress={handleCheckedChange}>
        {checked && <Ionicons name="checkmark" size={32} color="black" />}
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>
          {description === '' ? 'Pas de description' : description}
        </Text>
        <TouchableOpacity onPress={handleDelete}>
          <Text style={styles.deleteText}>Supprimer</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

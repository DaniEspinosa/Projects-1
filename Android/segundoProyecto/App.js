import React from 'react';
import { FlatList, Text, StyleSheet, StatusBar, View } from 'react-native';

export default function App() {
  const DATA = [
    {
      id: '1',
      title: 'Primer elemento',
    },
    {
      id: '2',
      title: 'Segundo elemento',
    },
    {
      id: '3',
      title: 'Tercer elemento',
    },
    {
      id: '4',
      title: 'Cuarto elemento',
    },
    {
      id: '5',
      title: 'Quinto elemento',
    },
  ]

  const Item = ({ title }) => (
    <Text style={styles.text}>{title}</Text>
  )

  const printElement = ({ item }) => (
    <Item title={item.title}/>
  )

  return (
    <FlatList
      data={DATA}
      renderItem={printElement}
      keyExtractor={item => item.id}
    />
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    margin: 15
  },
});
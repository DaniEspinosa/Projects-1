import React from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
  const DATA = [
    {
      id: '1',
      name: 'Antonio',
      surname: 'Luna',
      phone: '722229443',
      button: <Icon name="account-circle" size={50} />
    },
    {
      id: '2',
      name: 'Daniel',
      surname: 'Espinosa',
      phone: '566664225',
      icons: <Icon name="tram" size={50} />
    },
    {
      id: '3',
      name: 'Lucas',
      surname: 'Garcia',
      phone: '745852116',
      icons: <Icon name="account-convert" size={50} />
    },
    {
      id: '4',
      name: 'Carlos',
      surname: 'Mauri',
      phone: '765485334',
      icons: <Icon name="account-hard-hat" size={50} />
    },
    {
      id: '5',
      name: 'Jimenez',
      surname: 'Antonio',
      phone: '748521667',
      icons: <Icon style={styles.styleIcon} name="account-minus-outline" size={50} />
    },
  ]

  const printElement = ({ item }) => {
    return (
      <Text style={styles.text}>{item.name} {item.surname}, {item.phone} {item.icons}</Text>
    )
  }

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
    fontSize: 20,
    margin: 15
  }
});
import * as React from 'react';
import { FlatList, Button } from 'react-native';

export default function ListaPersonasScreen({ navigation, route }) {
    const DATA = [
        {
          id: '1',
          name: 'Manuel',
          surname: 'Garcia',
          phone: '722 229 443',
        },
        {
          id: '2',
          name: 'Daniel',
          surname: 'Espinosa',
          phone: '766 664 225',
        },
        {
          id: '3',
          name: 'Lucas',
          surname: 'Moreno',
          phone: '745 852 116',
        },
        {
          id: '4',
          name: 'Andres',
          surname: 'Cabañas',
          phone: '765 485 334',
        },
        {
          id: '5',
          name: 'Antonio',
          surname: 'Jimenez',
          phone: '748 521 667',
        },
      ]
      
    const printElement = ({ item }) => {
      return (
        <Button
          onPress={() => navigation.navigate('Persona', {
            name: item.name,
            surname: item.surname,
            phone: item.phone,
            })}
          title={item.name}
        />
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
  
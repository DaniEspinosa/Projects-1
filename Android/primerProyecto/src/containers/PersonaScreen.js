import * as React from 'react';
import { Text } from 'react-native';

export default function PersonaScreen({ route }) {
    const { name, surname, phone } = route.params
    return (
      <Text style={{fontSize: 30}}>Hola { name } { surname }, tu numero es: { phone } </Text>
    )
}
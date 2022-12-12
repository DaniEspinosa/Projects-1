import * as React from 'react';
import { Text, View, } from 'react-native';
import { container, text } from '../styles/styles';

export default function Informacion() {
    return (
      <View style={container}>
        <Text style={text}>Este es la pantalla de Informacion</Text>
      </View>
    );
  }
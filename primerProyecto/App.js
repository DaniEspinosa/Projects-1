import React, { useState } from "react";
import { StyleSheet, Button, Text, View, TextInput } from 'react-native';

export default function App() {
  const [edad, setEdad] = useState(null);
  const [texto, setText] = useState(null);

  const printText = () => {
    setText(
      <Text style={styles.texto}>
        {edad == 18 ? 'Acaba de ser mayor de edad' : edad < 18 ? 'Es menor de edad' : 'Es mayor de edad'}
      </Text>
    )
  }

  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.texto}>Hola mi nombre es </Text>
        <Text style={styles.textoNombre}>Daniel Espinosa</Text>
      </View>
      <Text style={styles.texto}>Escribe aqui tu edad</Text>
      <TextInput
        style={styles.input}
        placeholder="Edad..."
        keyboardType="numeric"
        onChangeText={edad => setEdad(edad)}
      />
      <Text>{texto}</Text>
      <View style={styles.botones}>
        <Button
          onPress={printText}
          title={"Finalizar"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    color: 'black',
    fontSize: 20,
    paddingTop: 50
  },
  textoNombre: {
    color: 'blue',
    fontSize: 20,
    paddingTop: 50
  },
  botones: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 200,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
})
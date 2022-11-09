import React, { useState } from "react"
import { Switch, StyleSheet, Image, ScrollView, Button, TextInput, View, Text } from 'react-native'
import img1 from './img/homer.gif'

export default function App() {
  const [edad, setEdad] = useState();
  const [nombre, setNombre] = useState();
  const [apellido, setApellido] = useState();
  const [correo, setCorreo] = useState();
  const [isEnabled, setIsEnabled] = useState();
  const [texto, setText] = useState(null);
  const [imagen, setImagen] = useState();


  const mostrarResultado = () => {
    setText(
      <Text style={styles.respuesta}>Mi nombre es {nombre} {apellido} con edad {edad}, con correo {correo}, con sexo {isEnabled ? <Text>Mujer</Text> : <Text>Hombre</Text>} </Text>
    )
    setImagen(
      <Image style={styles.myImageStyle} source={img1}/>
    )




  }

  return (
    <ScrollView>
      <View style={{ flexDirection: 'row', margin: 20 }}>
        <Text style={styles.texto}>Nombre: </Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre..."
          keyboardType="generic"
          onChangeText={nombre => setNombre(nombre)}
        />
      </View>

      <View style={{ flexDirection: 'row', margin: 20 }}>
        <Text style={styles.texto}>Apellido: </Text>
        <TextInput
          style={styles.input}
          placeholder="Apellido..."
          keyboardType="generic"
          onChangeText={apellido => setApellido(apellido)}
        />
      </View>

      <View style={{ flexDirection: 'row', margin: 20 }}>
        <Text style={styles.texto}>Edad: </Text>
        <TextInput
          style={styles.input}
          placeholder="Edad..."
          keyboardType="numeric"
          onChangeText={edad => setEdad(edad)}
        />
      </View>

      <View style={{ flexDirection: 'row', margin: 20 }}>
        <Text style={styles.texto}>Correo: </Text>
        <TextInput
          style={styles.input}
          placeholder="Correo..."
          keyboardType="generic"
          onChangeText={correo => setCorreo(correo)}
        />
      </View>

      <View style={{ flexDirection: 'row', margin: 20 }}>
        <Text style={styles.texto}>Hombre</Text>
        <Switch
          trackColor={{ false: 'red', true: 'blue' }}
          thumbColor={isEnabled ? 'blue' : 'red'}
          onValueChange={() => setIsEnabled((previousState) => !previousState)}
          value={isEnabled}
        />
        <Text style={styles.texto}>Mujer</Text>
      </View>

      <View style={styles.botones}>
        <Button
          onPress={mostrarResultado}
          title={"ENVIAR"}
        />
      </View>
      {texto}
      {imagen}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 30
  },
  input: {
    borderWidth: 1
  },
  respuesta: {
    fontSize: 20
  }
})
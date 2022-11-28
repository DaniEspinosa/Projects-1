import React, { useState } from "react"
import { Switch, StyleSheet, Image, ScrollView, Button, TextInput, View, Text, Alert } from 'react-native'
import img1 from './img/homer.gif'

export default function App() {
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [isEnabled, setIsEnabled] = useState();
  const [texto, setText] = useState(null);
  const [imagen, setImagen] = useState();
  const [isName, setIsName] = useState(true);
  const [isSurname, setIsSurname] = useState(true);
  const [isAge, setIsAge] = useState(true);
  const [isEmail, setIsEmail] = useState(true);

  function validateName(name) {
    const reg = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    if (reg.test(name)) {
      setIsName(true);
    } else {
      setIsName(false);
    }
    setName(name)
    if (name == "") {
      setIsName(true);
    }
  }

  function validateSurname(surname) {
    const reg = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    if (reg.test(surname)) {
      setIsSurname(true);
    } else {
      setIsSurname(false);
    }
    setSurname(surname)
    if (surname == "") {
      setIsSurname(true);
    }
  }

  function validateAge(age) {
    const reg = /^[0-9]+$/;
    if (reg.test(age)) {
      setIsAge(true);
    } else {
      setIsAge(false);
    }
    setAge(age);
    if (age == "") {
      setIsAge(true);
    }
  }

  function validateEmail(email) {
    const reg = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,40})+$/;
    if (reg.test(email)) {
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }
    setEmail(email);
    if (email == "") {
      setIsEmail(true);
    }
  }

  const mostrarResultado = () => {
    if (name != '' && email != '' && age != '' && surname != '' && isEmail == true && isAge == true && isName == true && isSurname == true) {
      setText(
        <View style={{ borderWidth: 4, borderRadius: 10, marginLeft: 20, marginRight: 20, backgroundColor: 'rgb(194, 194, 194)', marginTop: 10 }}>
          <Text style={styles.respuesta}>Mi nombre es {name} {surname} con edad {age}, con correo {email}, con sexo {isEnabled ? <Text>Mujer</Text> : <Text>Hombre</Text>} </Text>
        </View>
      )
      setImagen(
        <Image style={{ margin: 20, width: 350, borderWidth: 4, borderColor: 'black', borderRadius: 10 }} source={img1} />
      )
    } else {
      Alert.alert("Los campos están vacíos o son incorrectos", "Inténtalo de nuevo")
    }
  }

  const reset = () => {
    setText("")
    setAge("")
    setEmail("")
    setName("")
    setSurname("")
    setIsEmail(true)
    setIsAge(true)
    setIsName(true)
    setIsSurname(true)
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', margin: 20 }}>
          <Text style={styles.titulo}>FORMULARIO</Text>
        </View>
        <View style={{ borderWidth: 4, marginLeft: 20, marginRight: 20, borderRadius: 10, marginBottom: 10, backgroundColor: 'rgb(194, 194, 194)' }}>
          <View style={{ flexDirection: 'row', margin: 20 }}>
            <Text style={styles.texto}>Nombre: </Text>
            <TextInput
              style={isName ? (
                { borderWidth: 2, backgroundColor: 'white', borderRadius: 10, height: 35, width: 210, borderColor: 'grey' }
              ) : (
                { borderWidth: 2, backgroundColor: 'white', borderRadius: 10, height: 35, width: 210, borderColor: 'red' }
              )}
              placeholder="Nombre..."
              keyboardType="generic"
              onChangeText={name => validateName(name)}
              value={name}
            />
          </View>
          <View style={{ flexDirection: 'row', margin: 20 }}>
            <Text style={styles.texto}>Apellido: </Text>
            <TextInput
              style={isSurname ? (
                { borderWidth: 2, backgroundColor: 'white', borderRadius: 10, height: 35, width: 210, borderColor: 'grey' }
              ) : (
                { borderWidth: 2, backgroundColor: 'white', borderRadius: 10, height: 35, width: 210, borderColor: 'red' }
              )}
              placeholder="Apellido..."
              keyboardType="generic"
              onChangeText={surname => validateSurname(surname)}
              value={surname}
            />
          </View>
          <View style={{ flexDirection: 'row', margin: 20 }}>
            <Text style={styles.texto}>Edad: </Text>
            <TextInput
              style={isAge ? (
                { borderWidth: 2, backgroundColor: 'white', borderRadius: 10, height: 35, width: 210, borderColor: 'grey' }
              ) : (
                { borderWidth: 2, backgroundColor: 'white', borderRadius: 10, height: 35, width: 210, borderColor: 'red' }
              )}
              placeholder="Edad..."
              keyboardType="numeric"
              onChangeText={age => validateAge(age)}
              value={age}
            />
          </View>
          <View style={{ flexDirection: 'row', margin: 20 }}>
            <Text style={styles.texto}>Correo: </Text>
            <TextInput
              style={isEmail ? (
                { borderWidth: 2, backgroundColor: 'white', borderRadius: 10, height: 35, width: 210, borderColor: 'grey' }
              ) : (
                { borderWidth: 2, backgroundColor: 'white', borderRadius: 10, height: 35, width: 210, borderColor: 'red' }
              )}
              placeholder="Correo..."
              keyboardType="generic"
              onChangeText={email => validateEmail(email)}
              value={email}
            />
          </View>
          <View style={{ flexDirection: 'row', margin: 20, marginLeft: 65 }}>
            <Text style={styles.textoSexo}>Hombre</Text>
            <Switch
              trackColor={{ false: 'red', true: 'blue' }}
              thumbColor={isEnabled ? 'blue' : 'red'}
              onValueChange={() => setIsEnabled((previousState) => !previousState)}
              value={isEnabled}
            />
            <Text style={styles.textoSexo}>Mujer</Text>
          </View>
        </View>
        <View style={styles.botones}>
          <Button
            onPress={mostrarResultado}
            title={"ENVIAR"}
          />
        </View>
        <View style={styles.botones}>
          <Button
            onPress={reset}
            title={"LIMPIAR CAMPOS"}
          />
        </View>
        {texto}
        {texto === '' ? null : (imagen)}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    paddingBottom: '100%'
  },
  botones: {
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 5,
    marginTop: 5
  },
  texto: {
    fontSize: 25,
    color: 'white'
  },
  textoSexo: {
    margin: 10,
    fontSize: 20,
    color: 'white'
  },
  respuesta: {
    fontSize: 20,
    margin: 20,
    color: 'white',
  },
  titulo: {
    fontSize: 45,
    marginLeft: 40,
    color: 'white',
    fontWeight: 'bold'
  }
})
import React, { useState } from "react";
import { StyleSheet, Button, Text, View } from 'react-native';

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 30,
      paddingTop: 100,
      backgroundColor: 'red'
    },
    botones: {
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 30,
      paddingRight: 30,
      borderRadius: 200,
      backgroundColor: 'black'
    },
    texto: {
      color: 'black',
      fontSize: 30,
      textAlign: 'center',
      paddingTop: 50
    }
  })

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.texto}>Contador</Text>
      </View>
      <View style={styles.botones}>
        <Button
          onPress={() => {
            setCount1(0);
            setCount2(0);
          }}
          title={"RESETEA"}
        />
      </View>
      <View style={styles.botones}>
        <Button
          onPress={() => {
            setCount1(count1 + 1);
          }}
          title={"DE 1 EN 1"}
        />
      </View>
      <View style={styles.botones}>
        <Button
          onPress={() => {
            setCount2(count2 + 10);
          }}
          title={"DE 10 EN 10"}
        />
      </View>
      <Text style={styles.texto}>Contador 1 + 1: {count1}</Text>
      <Text style={styles.texto}>Contador 10 + 10: {count2}</Text>
    </View>
  )
}
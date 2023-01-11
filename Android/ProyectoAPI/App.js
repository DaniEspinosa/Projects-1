import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

export default function App() {
  const [fruits, setFruits] = useState(null);

  useEffect(() => {
    fetch("http://10.0.2.2:8080/fruits")
      .then(response => response.json())
      .then((responseJson) => {
        console.log('getting data from fetch', responseJson);
        setFruits(responseJson);
      })
      .catch(error => console.log('errores', error));
  }, [])

  return (
    <Text>hola</Text>
  )
}
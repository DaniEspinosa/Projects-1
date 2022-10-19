import React, { useState } from "react";
import { Button, Text, View } from 'react-native';

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <View>
      <Button
        onPress={() => {
          setCount1(0);
          setCount2(0);
        }}
        title={"RESETEA"}
      />
      <Button
        onPress={() => {
          setCount1(count1 + 1);
        }}
        title={"DE 1 EN 1"}
      />
      <Button
        onPress={() => {
          setCount2(count2 + 10);
        }}
        title={"DE 10 EN 10"}
      />
      <Text>Contador 1 + 1: {count1}</Text>
      <Text>Contador 10 + 10: {count2}</Text>
    </View>
  )
}
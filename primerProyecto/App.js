import React, { useState } from "react"
import { Switch, StyleSheet, Image, ScrollView } from 'react-native'
import img1 from './img/homer.gif'

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <ScrollView>
      <Switch
        trackColor={{ false: 'red', true: 'blue' }}
        thumbColor={isEnabled ? 'blue' : 'red'}
        onValueChange={() => setIsEnabled((previousState) => !previousState)}
        value={isEnabled}
      />
      {isEnabled ? <Image style={styles.myImageStyle} source={img1} /> : null}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  myImageStyle: {
    height: 1000,
    width: '100%'
  }
})
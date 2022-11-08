import { StyleSheet, Image } from 'react-native'
import img1 from './img/images.jpg'

export default function App() {
  return (
      <Image style={styles.myImageStyles} source={img1} />
  )
}

const styles = StyleSheet.create({
  myImageStyles: {
    height: '100%',
    width: '100%'
  }
})


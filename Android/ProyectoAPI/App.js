import React, { useEffect, useState } from 'react';
import { StyleSheet, Button, RefreshControl, Text, View, FlatList, ScrollView, Image, TextInput, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IconName } from "react-icons/hi2";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

const url = "http://10.88.1.224:8080/fruits"

function HomeScreen() {
  const [frutas, setFrutas] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imagen, setImagen] = useState(null);

  useEffect(() => {
    getFrutas()
  }, [])

  const getFrutas = () => {
    fetch(url)
    .then(response => response.json())
    .then((response) => {
      console.log('getting data from fetch: ', response);
      setFrutas(response);
    })
    .catch(error => console.log("El error es: ", error));
  }


  //useEffect(() => {
  //  setLoading(true)
  //  fetch(url)
  //    .then(response => response.json())
  //    .then((responseJson) => {
  //      console.log('getting data from fetch', responseJson);
  //      setFrutas(responseJson);
  //      setLoading(false)
  //    })
  //    .catch(error => console.log('errores', error));
  //}, [])

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false), getFrutas());
  }, []);

  const getImagen = (nombre) => {
    const imgs = {
      Uvas: "https://frutasolivar.com/wp-content/uploads/2020/05/40010140_s.jpg",
      Piña: "https://www.65ymas.com/uploads/s1/48/35/18/bigstock-whole-pineapple-and-pineapple-382336442_1_621x621.jpeg",
      Manzana: "https://www.recetasnestlecam.com/sites/default/files/2022-04/tipos-de-manzana-royal-gala.jpg",
      Melocoton: "https://img.freepik.com/fotos-premium/frutas-melocoton-rebanada-hojas-verdes-aisladas_80510-572.jpg",
      Kiwi: "http://www.frutas-hortalizas.com/img/fruites_verdures/presentacio/14.jpg",
      Naranja: "https://jlsupervia.es/wp-content/uploads/2020/03/pasta-aroma-naranja.jpg",
      Platano: "https://cdn.shopify.com/s/files/1/0492/2458/1274/products/8095c14d-a4df-456e-89ab-429175ac02f1_1024x1024.png?v=1622197543",
      Pera: "https://thumbs.dreamstime.com/b/fruta-amarilla-de-la-pera-con-la-hoja-aislada-en-blanco-51277144.jpg",
      pordefecto: "data:image/png;base64,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"
    }
    return imgs[nombre] ?? imgs.pordefecto
  }

  const printElement = ({ item }) => {
    return (
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <Text style={styles.text}> {item.name}, {item.price}€ </Text>
        <Image style={styles.imagen} source={{ uri: getImagen(item.name) }}></Image>
      </ScrollView>
    )
  }

  return (
    <FlatList
      data={frutas}
      renderItem={printElement}
      refreshControl={<RefreshControl refreshing={refreshing}
      onRefresh={onRefresh} />}
    />
  );
}

function SettingsScreen() {
  const [form, setForm] = useState({ id: 0, name: "", price: "" })
  return (
    <View style={styles.botones}>
      <TextInput placeholder='Nombre de la fruta' onChangeText={value => setForm({ ...form, name: value })} value={form.name} style={styles.input} />
      <TextInput placeholder='Precio de la fruta' onChangeText={value => setForm({ ...form, price: value })} value={form.price} style={styles.input} />
      <Button
        onPress={() => {
          SubirFruta(form);
        }}
        title={"Nueva Fruta"}
      />
    </View>
  )
}

function SubirFruta(data) {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json())
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Frutas') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Subir Frutas') {
              iconName = focused ? 'basket' : 'basket-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'grey',
        })}
      >
        <Tab.Screen name="Frutas" component={HomeScreen} />
        <Tab.Screen name="Subir Frutas" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  botones: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 200,
  },
  text: {
    fontSize: 30,
    margin: 10
  },
  input: {
    borderWidth: 2,
    margin: 10
  },
  imagen: {
    width: '100%',
    height: 300
  }
})
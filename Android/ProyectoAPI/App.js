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
    setLoading(true)
    fetch("http://10.88.1.224:8080/fruits")
      .then(response => response.json())
      .then((responseJson) => {
        console.log('getting data from fetch', responseJson);
        setFrutas(responseJson);
        setLoading(false)
      })
      .catch(error => console.log('errores', error));
  }, [])

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const printElement = ({ item }) => {
    return (
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <Text style={styles.text}>{item.id}: {item.name}, {item.price}€</Text>
      </ScrollView>
    )
  }

  return (
    <FlatList
      data={frutas}
      renderItem={printElement}
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
            } else if (route.name === 'SubirFruta') {
              iconName = focused ? 'nutrition' : 'nutrition-outline';
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
  }
})
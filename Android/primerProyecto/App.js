import * as React from 'react';
import { FlatList, Text, View, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Informacion') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'grey',
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Informacion" component={Informacion} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



function HomeStack() {
  return (
    <Stack.Navigator inicialRouteName="Home">
      <Stack.Screen name="Home" component={ListaPersonasScreen} options={{ title: "Pantalla Principal" }} initialParams={{name: ""}} />
      <Stack.Screen name="Persona" component={PersonaScreen} options={{ title: "Persona" }} />
    </Stack.Navigator>
  );
}

function ListaPersonasScreen({ navigation, route }) {
  const printElement = ({ item }) => {
    return (
      <Button
        onPress={() => navigation.navigate('Persona', {
          name: item.name,
          surname: item.surname,
          phone: item.phone,
          })}
        title={item.name}
      />
    )
  }
  return (
    <FlatList
      data={DATA}
      renderItem={printElement}
      keyExtractor={item => item.id}
    />
  )
}

function PersonaScreen({ route }) {
    const { name, surname, phone } = route.params
    return (
      <Text style={{fontSize: 30}}>Hola { name } { surname }, { phone } </Text>
    )
}

function Informacion() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Este es la pantalla de Informacion</Text>
    </View>
  );
}

const DATA = [
  {
    id: '1',
    name: 'Antonio',
    surname: 'Luna',
    phone: '722229443',
  },
  {
    id: '2',
    name: 'Daniel',
    surname: 'Espinosa',
    phone: '566664225',
  },
  {
    id: '3',
    name: 'Lucas',
    surname: 'Garcia',
    phone: '745852116',
  },
  {
    id: '4',
    name: 'Carlos',
    surname: 'Mauri',
    phone: '765485334',
  },
  {
    id: '5',
    name: 'Jimenez',
    surname: 'Antonio',
    phone: '748521667',
  },
]

const styles = StyleSheet.create({
  text: {
    fontSize: 80,
    color: 'white'
  },
  textoLista: {
    fontSize: 20,
    margin: 15
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey'
  }
}
)
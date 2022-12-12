import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaPersonasScreen from '../containers/ListaPersonasScreen';
import PersonaScreen from '../containers/PersonaScreen';


const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
      <Stack.Navigator inicialRouteName="Home">
        <Stack.Screen name="Home" component={ListaPersonasScreen} options={{ title: "Pantalla Principal" }} initialParams={{name: ""}} />
        <Stack.Screen name="Persona" component={PersonaScreen} options={{ title: "Persona" }} />
      </Stack.Navigator>
    );
  }
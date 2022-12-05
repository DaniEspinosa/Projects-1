import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Pantalla principal</Text>
        <View style={styles.botones}>
          <Button
            onPress={() => navigation.navigate("Profile", { userName: 'Daniel', edad: 19 })}
            title={"Ir al perfil"}
          />
        </View>
        <View style={styles.botones}>
          <Button
            onPress={() => navigation.navigate("Settings")}
            title={"Ir a ajustes"}
          />
        </View>
      </View>
    );
  }

  function ProfilePrincipal({route}) {
    const { userName, edad } = route.params

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{userName}, {edad}</Text>
      </View>
    );
  }

  function Ajustes() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Ajustes</Text>
      </View>
    );
  }

  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator inicialRouteName="Profile">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Pantalla Principal" }} />
        <Stack.Screen name="Profile" component={ProfilePrincipal} options={{ title: "Mi perfil" }} />
        <Stack.Screen name="Settings" component={Ajustes} options={{ title: "Ajustes" }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  botones: {
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 5,
    marginTop: 5
  }
})
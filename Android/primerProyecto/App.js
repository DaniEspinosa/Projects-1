import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator inicialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Pantalla Principal" }} />
        <Stack.Screen name="Profile" component={ProfilePrincipalScreen} options={{ title: "Mi perfil" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Este es la pantalla principal</Text>
      <Button
            onPress={() => navigation.navigate("Profile")}
            title={"Ir al perfil"}
          />
    </View>
  );
}

function ProfilePrincipalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Este es el perfil</Text>
      <Button
            onPress={() => navigation.navigate("Profile")}
            title={"Ir al perfil"}
          />
    </View>
  );
}



function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Este es la pantalla de ajustes</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            } 

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'grey',
        })}
      >
        <Tab.Screen name="HomeTab" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 80,
    color: 'white'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey'
  }
})
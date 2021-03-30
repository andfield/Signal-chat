import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import loginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

//Creating a stack to hold all the screen
const Stack = createStackNavigator();

//global screen styles for stack navigator.
const globalScreenOptions =  {
  headerStyle: { backgroundColor: '#2C6BED'},
  headerTitleStyle: { color: 'white', alignSelf: 'center'},
  headerTintColor: 'white',
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name="Login" component={loginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

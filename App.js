import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Desk from "./src/components/Desk";
import store from "./src/store/storeConfigure";
import Column from "./src/components/Column";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
});

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Desk" component={Desk} />
          <Stack.Screen name="Column" component={Column} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </Provider>
  );
}

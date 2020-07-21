import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Desk from "./src/components/Desk";
import Column from "./src/components/Column";
import Card from "./src/components/Card";
import store from "./src/store/storeConfigure";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Desk"
            component={Desk}
            options={{
              title: "My Desk",
              headerTintColor: "#514D47",
              headerTitleAlign: "center",
              headerStyle: {
                elevation: 0,
              },
            }}
          />
          <Stack.Screen name="Column" component={Column} />
          <Stack.Screen name="Card" component={Card} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </Provider>
  );
}
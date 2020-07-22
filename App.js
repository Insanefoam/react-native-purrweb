import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DeskScreen from "./src/screens/DeskScreen/DeskScreen";
import ColumnScreen from "./src/screens/ColumnScreen/ColumnScreen";
import CardScreen from "./src/screens/CardScreen/CardScreen";
import store from "./src/store/storeConfigure";

const Stack = createStackNavigator();

const headerStyles = {
  headerTintColor: "#514D47",
  headerTitleAlign: "center",
  headerStyle: {
    elevation: 0,
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="DeskScreen" component={DeskScreen} />
          <Stack.Screen name="ColumnScreen" component={ColumnScreen} />
          <Stack.Screen name="CardScreen" component={CardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </Provider>
  );
}

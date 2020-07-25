import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "./src/components/Header";
import DeskScreen from "./src/screens/DeskScreen";
import ColumnScreen from "./src/screens/ColumnScreen";
import CardScreen from "./src/screens/CardScreen";
import AddColumn from "./src/components/AddColumn";
import store from "./src/store/storeConfigure";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerStyle: { elevation: 0, shadowOpacity: 0 } }}>
          <Stack.Screen
            name="DeskScreen"
            component={DeskScreen}
            options={{
              headerTitle: () => <Header title="My Desk" MyButton={AddColumn} />,
            }}
          />
          <Stack.Screen name="ColumnScreen" component={ColumnScreen} />
          <Stack.Screen
            name="CardScreen"
            component={CardScreen}
            options={{
              headerTitle: () => <Header title="Card Menu" />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </Provider>
  );
}

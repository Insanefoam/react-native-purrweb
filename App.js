import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DeskScreen from "./src/screens/DeskScreen/DeskScreen";
import ColumnScreen from "./src/screens/ColumnScreen/ColumnScreen";
import CardScreen from "./src/screens/CardScreen/CardScreen";
import store from "./src/store/storeConfigure";
import DeskScreenHeader from "./src/components/DeskScreenHeader";

const Stack = createStackNavigator();

const noShadow = { headerStyle: { elevation: 0 } };

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="DeskScreen"
            component={DeskScreen}
            options={{ headerTitle: () => <DeskScreenHeader />, ...noShadow }}
          />
          <Stack.Screen
            name="ColumnScreen"
            component={ColumnScreen}
            options={{
              headerTitleStyle: { fontSize: 17, fontWeight: "100" },
              headerTitleAlign: "center",
              ...noShadow,
            }}
          />
          <Stack.Screen
            name="CardScreen"
            component={CardScreen}
            options={{ title: "", ...noShadow }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </Provider>
  );
}

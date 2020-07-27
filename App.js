import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DeskScreen from "./src/screens/DeskScreen";
import ColumnScreen from "./src/screens/ColumnScreen";
import CardScreen from "./src/screens/CardScreen";
import AddColumnScreen from "./src/screens/AddColumnScreen";
import store from "./src/store/storeConfigure";
import AuthScreen from "./src/screens/AuthScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignInScreen from "./src/screens/SignInScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerStyle: { elevation: 0, shadowOpacity: 0 } }}
          initialRouteName="AuthScreen"
        >
          <Stack.Screen name="AuthScreen" component={AuthScreen} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />

          <Stack.Screen name="DeskScreen" component={DeskScreen} />
          <Stack.Screen name="ColumnScreen" component={ColumnScreen} />
          <Stack.Screen
            name="CardScreen"
            component={CardScreen}
            options={{
              headerTitle: () => undefined,
            }}
          />
          <Stack.Screen name="AddColumnScreen" component={AddColumnScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </Provider>
  );
}

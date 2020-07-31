import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import DeskScreen from "../screens/DeskScreen";
import ColumnScreen from "../screens/ColumnScreen";
import CardScreen from "../screens/CardScreen";
import AddColumnScreen from "../screens/AddColumnScreen";
import AuthScreen from "../screens/AuthScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SignInScreen from "../screens/SignInScreen";
import ChangeColumnScreen from "../screens/ChangeColumnScreen";
import ChangeCardScreen from "../screens/ChangeCardScreen";
import { selectUserInfo } from "../store/selectors";

const Stack = createStackNavigator();

const Navigator = () => {
  const userInfo = useSelector(selectUserInfo);
  const initialRoute = userInfo ? "DeskScreen" : "AuthScreen";

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerStyle: { elevation: 0, shadowOpacity: 0 } }}
        initialRouteName={initialRoute}
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
        <Stack.Screen name="ChangeColumnScreen" component={ChangeColumnScreen} />
        <Stack.Screen name="ChangeCardScreen" component={ChangeCardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

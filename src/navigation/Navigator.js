import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
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
import Header from "../components/Header";

const Stack = createStackNavigator();

const Navigator = () => {
  const userInfo = useSelector(selectUserInfo);
  const initialRoute = userInfo.token ? "DeskScreen" : "AuthScreen";

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: ({ scene, navigation }) => {
              return (
                <Header
                  screen={scene.route.name}
                  navigation={navigation}
                  params={scene.route.params}
                />
              );
            },
          }}
          initialRouteName={initialRoute}
          headerMode="screen"
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
    </SafeAreaProvider>
  );
};

export default Navigator;

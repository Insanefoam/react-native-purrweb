import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import Desk from "./src/components/Desk";
import store from "./src/store/storeConfigure";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Desk />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

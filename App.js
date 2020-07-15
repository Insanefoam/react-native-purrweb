import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Desk from "./src/components/Desk";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Desk />
      <StatusBar style="auto" />
    </View>
  );
}

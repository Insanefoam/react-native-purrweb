import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    justifyContent: "center",
    width: "100%",
    paddingVertical: 20,
    marginBottom: 20,
    flexDirection: "row",
  },
  title: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
  },
  columnsContainer: {
    flex: 1,
  },
  columns: {
    fontSize: 25,
    marginBottom: 20,
    borderWidth: 1,
  },
});

const Desk = () => {
  const columns = ["To do", "In progress", "Testing", "Done"];

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>My Desk</Text>
        <Button title="+" />
      </View>
      <View style={styles.columnsContainer}>
        {columns.map((column) => (
          <Text style={styles.columns}>{column}</Text>
        ))}
      </View>
    </View>
  );
};

export default Desk;

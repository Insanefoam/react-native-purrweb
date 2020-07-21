import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 345,
    height: 60,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 4,
    justifyContent: "center",
    paddingLeft: 15,
    marginBottom: 10,
  },
  text: { fontSize: 17, color: "#514D47", lineHeight: 20 },
});

const Row = ({ text, id, onPress }) => {
  return (
    <TouchableOpacity key={id} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Row;

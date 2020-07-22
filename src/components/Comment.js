import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    padding: 15,
  },
  author: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#514D47",
  },
  name: { fontSize: 17, color: "#514D47" },
});

const Comment = ({ id, name, author }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Comment;

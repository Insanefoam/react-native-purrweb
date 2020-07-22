import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: "#E5E5E5",
    borderBottomColor: "#E5E5E5",
    padding: 15,
  },
  author: {
    fontWeight: "bold",
  },
});

const Comment = ({ id, name, author }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.author}>{author}</Text>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Comment;

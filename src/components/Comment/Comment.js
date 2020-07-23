import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import styles from "./styles";

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

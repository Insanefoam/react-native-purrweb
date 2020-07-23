import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const ColumnButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ColumnButton;

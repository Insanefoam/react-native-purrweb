import React from "react";
import { View, Text } from "react-native";

const Column = ({ id }) => {
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default Column;

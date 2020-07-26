import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const Header = ({ title, MyButton }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
      {MyButton && <MyButton />}
    </View>
  );
};

export default Header;

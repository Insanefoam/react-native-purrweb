import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { getCommentsCount } from "../store/selectors";

const styles = StyleSheet.create({
  container: {
    width: 345,
    height: 60,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 4,
    justifyContent: "center",
    paddingLeft: 15,
    marginTop: 15,
  },
  text: { fontSize: 17, color: "#514D47", lineHeight: 20 },
});

const CardButton = ({ text, id, onPress }) => {
  const commentsCount = useSelector((state) => getCommentsCount(state, id));

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>
          {text} with {commentsCount} comments
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardButton;

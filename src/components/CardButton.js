import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useSelector } from "react-redux";
import { getCommentsCount } from "../store/selectors";

const styles = StyleSheet.create({
  container: {
    width: 345,
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  text: { fontSize: 17, color: "#514D47", lineHeight: 20 },
  commentsContainer: { flex: 1, flexDirection: "row", justifyContent: "flex-end" },
  image: { marginRight: 10 },
});

const CardButton = ({ text, id, onPress }) => {
  const commentsCount = useSelector((state) => getCommentsCount(state, id));

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.commentsContainer}>
          <Image source={require("../../assets/comment.png")} style={styles.image} />
          <Text>{commentsCount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardButton;

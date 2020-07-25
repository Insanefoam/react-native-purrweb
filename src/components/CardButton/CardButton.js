import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useSelector } from "react-redux";
import { getCommentsCount } from "../../store/selectors";

import styles from "./styles";

const CardButton = ({ text, id, onPress }) => {
  const commentsCount = useSelector((state) => getCommentsCount(state, id));

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.commentsContainer}>
          <Image source={require("../../../assets/comment.png")} style={styles.image} />
          <Text>{commentsCount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardButton;

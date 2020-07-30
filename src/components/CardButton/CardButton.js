import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useSelector } from "react-redux";
import Comment from "../../../assets/comment.svg";
import { selectCommentsCount } from "../../store/selectors";

import styles from "./styles";

const CardButton = ({ text, id, onPress }) => {
  const commentsCount = useSelector((state) => selectCommentsCount(state, id));

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.commentsContainer}>
          <Comment width={20} height={20} style={styles.image} />
          <Text>{commentsCount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardButton;

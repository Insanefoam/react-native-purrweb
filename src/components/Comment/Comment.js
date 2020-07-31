import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";
import Trash from "../../../assets/trash.svg";
import styles from "./styles";
import { deleteCommentBackend } from "../../api";
import { deleteComment } from "../../store/actions";

const Comment = ({ id, name, author = "John Doe" }) => {
  const dispatch = useDispatch();

  const handlePress = () => {
    deleteCommentBackend(id).then((res) => {
      dispatch(deleteComment(id));
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <TouchableOpacity style={styles.imageContainer} onPress={handlePress}>
        <Trash width={25} height={25} />
      </TouchableOpacity>
    </View>
  );
};

export default Comment;

import React, { useState } from "react";
import { View, TextInput, Image } from "react-native";
import { useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { addComment } from "../../store/actions";
import styles from "./styles";

const AddComment = ({ id }) => {
  const [newComment, setNewComment] = useState("");
  const dispatch = useDispatch();

  const addNewComment = () => {
    if (newComment) {
      dispatch(addComment(id, newComment, "John Doe"));
      setNewComment("");
    } else {
      alert("Слишком короткий текст комментария");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={addNewComment}>
        <Image source={require("../../../assets/comment.png")} />
      </TouchableOpacity>
      <TextInput
        style={styles.inputField}
        returnKeyType="go"
        onChangeText={(text) => setNewComment(text)}
        value={newComment}
        placeholder="Add a comment..."
        onSubmitEditing={addNewComment}
      />
    </View>
  );
};

export default AddComment;

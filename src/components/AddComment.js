import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import { addComment } from "../store/actions";

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 10,
    borderWidth: 1,
  },
  inputField: {
    width: 300,
    marginRight: 20,
    padding: 5,
  },
});

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
    <View style={styles.inputContainer}>
      <Button onPress={addNewComment} title="+" />
      <TextInput
        style={styles.inputField}
        onChangeText={(text) => setNewComment(text)}
        value={newComment}
        placeholder="Add new comment..."
        onSubmitEditing={addNewComment}
      />
    </View>
  );
};

export default AddComment;

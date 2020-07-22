import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import { addComment } from "../store/actions";

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 10,
    width: 345,
    paddingLeft: 15,
  },
  inputField: {
    marginLeft: 10,
    width: 300,
    padding: 5,
    color: "#9C9C9C",
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

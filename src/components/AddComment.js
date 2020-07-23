import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Image } from "react-native";
import { useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { addComment } from "../store/actions";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
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
    <View style={styles.container}>
      <TouchableOpacity onPress={addNewComment}>
        <Image source={require("../../assets/comment.png")} />
      </TouchableOpacity>
      <TextInput
        style={styles.inputField}
        onChangeText={(text) => setNewComment(text)}
        value={newComment}
        placeholder="Add a comment..."
        onSubmitEditing={addNewComment}
      />
    </View>
  );
};

export default AddComment;

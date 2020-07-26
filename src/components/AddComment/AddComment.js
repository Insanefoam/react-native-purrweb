import React, { useState } from "react";
import { View, TextInput, Image, Text } from "react-native";
import { useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Form, Field } from "react-final-form";
import { addComment } from "../../store/actions";
import styles from "./styles";

const AddComment = ({ cardId }) => {
  const dispatch = useDispatch();

  const submitHandler = ({ comment }, form) => {
    dispatch(addComment(cardId, comment, "John Doe"));
    setTimeout(form.reset);
  };

  return (
    <Form onSubmit={submitHandler}>
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <TouchableOpacity onPress={handleSubmit}>
            <Image source={require("../../../assets/comment.png")} />
          </TouchableOpacity>
          <Field
            name="comment"
            placeholder="Add a comment..."
            validate={(value) => (value ? undefined : "Comment cannot be empty")}
          >
            {({ input, meta, placeholder }) => (
              <TextInput
                style={styles.inputField}
                returnKeyType="go"
                {...input}
                placeholder={(meta.submitFailed && meta.error) || placeholder}
                placeholderTextColor={meta.submitFailed ? "red" : "#C7C7CD"}
                onSubmitEditing={handleSubmit}
              />
            )}
          </Field>
        </View>
      )}
    </Form>
  );
};

export default AddComment;

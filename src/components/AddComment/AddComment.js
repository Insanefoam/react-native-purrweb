import React from "react";
import { View, TextInput, Image } from "react-native";
import { useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Form, Field } from "react-final-form";
import { addComment } from "../../store/actions";
import styles from "./styles";
import Comment from "../../../assets/comment.svg";
import { addCommentBackend } from "../../api";

const AddComment = ({ cardId }) => {
  const dispatch = useDispatch();

  const submitHandler = ({ comment }, form) => {
    addCommentBackend(comment, cardId)
      .then((res) => {
        dispatch(addComment(Date.now(), cardId, comment, 0));
        setTimeout(form.reset);
      })
      .catch((err) => alert("Oops something went wrong :("));
  };

  return (
    <Form onSubmit={submitHandler}>
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <TouchableOpacity onPress={handleSubmit}>
            <Comment width={20} height={20} />
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

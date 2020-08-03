import React from "react";
import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Form, Field } from "react-final-form";
import { selectComment } from "store/selectors";
import SubmitButton from "components/SubmitButton";
import InputField from "components/InputField/InputField";
import { changeCommentBackend } from "api";
import { changeComment } from "store/actions";
import DefaultHeader from "components/Header/DefaultHeader";
import styles from "./styles";

const required = (value) => (value ? undefined : "Required field");

const ChangeCommentScreen = ({ route, navigation }) => {
  navigation.setOptions({ header: () => <DefaultHeader navigation={navigation} /> });

  const { id } = route.params;
  const comment = useSelector((state) => selectComment(state, id));
  const dispatch = useDispatch();

  const submitHandler = ({ comment }, form) => {
    changeCommentBackend(id, comment).then((res) => {
      dispatch(changeComment(id, comment));
      setTimeout(form.reset);
      navigation.goBack();
    });
  };

  return (
    <Form onSubmit={submitHandler}>
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Enter new comment:</Text>
          <View style={styles.input}>
            <Field
              name="comment"
              defaultValue={comment.body}
              validate={required}
              component={InputField}
            />
          </View>
          <SubmitButton text="SUBMIT" onPress={handleSubmit} />
        </View>
      )}
    </Form>
  );
};

export default ChangeCommentScreen;

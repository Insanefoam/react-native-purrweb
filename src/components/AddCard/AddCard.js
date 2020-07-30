import React from "react";
import { View, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Form, Field } from "react-final-form";
import { addCard } from "../../store/actions";
import Plus from "../../../assets/plus.svg";
import styles from "./styles";
import { addCardBackend } from "../../api";

const AddCard = ({ columnId }) => {
  const dispatch = useDispatch();

  const submitHandler = ({ card }, form) => {
    addCardBackend(card, "No Description", false, columnId)
      .then((res) => {
        dispatch(addCard(card, "No Description", columnId));
        setTimeout(form.reset);
      })
      .catch((err) => alert("Oopss something went wrong :("));
  };

  return (
    <Form onSubmit={submitHandler}>
      {({ handleSubmit }) => (
        <View>
          <View style={styles.container}>
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Plus width={15} height={15} />
            </TouchableOpacity>
            <Field
              name="card"
              placeholder="Add a card..."
              validate={(value) => (value ? undefined : "Card name cannot be empty!")}
            >
              {({ input, placeholder, meta }) => (
                <TextInput
                  style={styles.inputField}
                  {...input}
                  placeholder={(meta.submitFailed && meta.error) || placeholder}
                  placeholderTextColor={meta.submitFailed ? "red" : "#C7C7CD"}
                  returnKeyType="go"
                  onSubmitEditing={handleSubmit}
                />
              )}
            </Field>
          </View>
        </View>
      )}
    </Form>
  );
};

export default AddCard;

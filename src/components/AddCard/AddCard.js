import React, { useState } from "react";
import { View, TextInput, Image, Text } from "react-native";
import { useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Form, Field } from "react-final-form";
import { addCard } from "../../store/actions";
import styles from "./styles";

const AddCard = ({ columnId }) => {
  const dispatch = useDispatch();

  const submitHandler = ({ card }, form) => {
    dispatch(addCard(card, columnId, ""));
    setTimeout(form.reset);
  };

  return (
    <Form onSubmit={submitHandler}>
      {({ handleSubmit }) => (
        <View>
          <View style={styles.container}>
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Image source={require("../../../assets/plus.png")} />
            </TouchableOpacity>
            <Field
              name="card"
              placeholder="Add a card..."
              validate={(value) => (value ? undefined : "Empty card name")}
            >
              {({ input, placeholder, meta }) => (
                <View>
                  <TextInput
                    style={styles.inputField}
                    {...input}
                    placeholder={placeholder}
                    returnKeyType="go"
                    onSubmitEditing={handleSubmit}
                  />
                  {meta.submitFailed && <Text style={styles.error}>Card name cannot be empty</Text>}
                </View>
              )}
            </Field>
          </View>
        </View>
      )}
    </Form>
  );
};

export default AddCard;

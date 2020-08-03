import React from "react";
import { View, Text } from "react-native";
import { Form, Field } from "react-final-form";
import styles from "./styles";
import SubmitButton from "../../components/SubmitButton";
import InputField from "../../components/InputField/InputField";
import { signUp } from "../../api";

const required = (value) => (value ? undefined : "Required field");

const SignUpScreen = ({ navigation }) => {
  const submitHandler = ({ email, name, password }, form) => {
    signUp(email, name, password).then((res) => {
      if (res) {
        setTimeout(form.reset);
        navigation.navigate("DeskScreen");
      } else {
        alert("Account with that email already exists");
      }
    });
  };

  return (
    <Form onSubmit={submitHandler}>
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Trello</Text>
          <Field name="name" placeholder="Name" validate={required} component={InputField} />
          <Field name="email" placeholder="E-mail" validate={required} component={InputField} />
          <Field
            name="password"
            placeholder="Password"
            validate={required}
            component={InputField}
          />
          <SubmitButton text="Sign Up" onPress={handleSubmit} />
        </View>
      )}
    </Form>
  );
};

export default SignUpScreen;

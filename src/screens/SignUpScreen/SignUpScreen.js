import React from "react";
import { View } from "react-native";
import { Form, Field } from "react-final-form";
import styles from "./styles";
import SubmitButton from "../../components/SubmitButton";
import InputField from "../../components/InputField/InputField";

const required = (value) => (value ? undefined : "Required field");

const submitHandler = (values, form) => {
  alert("submit");
};

const SignUpScreen = () => {
  return (
    <Form onSubmit={submitHandler}>
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <Field name="name" placeholder="Name" validate={required} component={InputField} />
          <Field name="email" placeholder="E-mail" validate={required} component={InputField} />
          <Field
            name="password"
            placeholder="Password"
            validate={required}
            component={InputField}
          />
          <SubmitButton text="Sign In" onPress={handleSubmit} />
        </View>
      )}
    </Form>
  );
};

export default SignUpScreen;

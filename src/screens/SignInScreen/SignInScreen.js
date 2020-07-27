import React from "react";
import { View } from "react-native";
import { Form, Field } from "react-final-form";
import axios from "axios";
import styles from "./styles";
import SubmitButton from "../../components/SubmitButton";
import InputField from "../../components/InputField/InputField";
import { signIn } from "../../api";

const required = (value) => (value ? undefined : "Required field");

const SignInScreen = ({ navigation }) => {
  const submitHandler = ({ email, password }, form) => {
    signIn(email, password).then((res) => {
      if (res === "ok") {
        setTimeout(form.reset);
        navigation.navigate("DeskScreen");
      }
    });
  };

  return (
    <Form onSubmit={submitHandler}>
      {({ handleSubmit }) => (
        <View style={styles.container}>
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

export default SignInScreen;

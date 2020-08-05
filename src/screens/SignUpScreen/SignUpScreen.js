import React from "react";
import { View, Text } from "react-native";
import { Form, Field } from "react-final-form";
import SubmitButton from "components/SubmitButton";
import InputField from "components/InputField";
import { signUp } from "api";
import DefaultHeader from "components/Header/DefaultHeader";
import styles from "./styles";

const required = (value) => (value ? undefined : "Required field");

const SignUpScreen = ({ navigation }) => {
  navigation.setOptions({
    header: () => <DefaultHeader navigation={navigation} />,
  });

  const submitHandler = ({ email, name, password }, form) => {
    signUp(email.trim(), name.trim(), password.trim()).then((res) => {
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
          <View style={styles.fieldContainer}>
            <Field name="name" placeholder="Name" validate={required} component={InputField} />
          </View>
          <View style={styles.fieldContainer}>
            <Field name="email" placeholder="E-mail" validate={required} component={InputField} />
          </View>
          <View style={styles.fieldContainer}>
            <Field
              name="password"
              placeholder="Password"
              validate={required}
              component={InputField}
            />
          </View>
          <SubmitButton text="Sign Up" onPress={handleSubmit} />
        </View>
      )}
    </Form>
  );
};

export default SignUpScreen;

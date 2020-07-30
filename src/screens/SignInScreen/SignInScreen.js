import React from "react";
import { View, Text } from "react-native";
import { Form, Field } from "react-final-form";
import styles from "./styles";
import SubmitButton from "../../components/SubmitButton";
import InputField from "../../components/InputField/InputField";
import { signIn } from "../../api";

const required = (value) => (value ? undefined : "Required field");

const SignInScreen = ({ navigation }) => {
  navigation.setOptions({ headerTitle: () => undefined });

  const submitHandler = ({ email, password }, form) => {
    signIn(email, password).then((res) => {
      if (res) {
        setTimeout(form.reset);
        navigation.navigate("DeskScreen");
      } else {
        alert("Invalid email or password");
      }
    });
  };

  return (
    <Form onSubmit={submitHandler}>
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Trello</Text>
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

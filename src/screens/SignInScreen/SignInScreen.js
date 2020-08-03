import React from "react";
import { View, Text } from "react-native";
import { Form, Field } from "react-final-form";
import { useDispatch } from "react-redux";
import SubmitButton from "components/SubmitButton";
import InputField from "components/InputField/InputField";
import { signIn } from "api";
import { initUser } from "store/actions";
import DefaultHeader from "components/Header/DefaultHeader";
import styles from "./styles";

const required = (value) => (value ? undefined : "Required field");

const SignInScreen = ({ navigation }) => {
  navigation.setOptions({ header: () => <DefaultHeader navigation={navigation} /> });

  const dispatch = useDispatch();

  const submitHandler = ({ email, password }, form) => {
    signIn(email, password).then(({ name, token }) => {
      if (name) {
        dispatch(initUser(name, token));
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
          <View style={styles.email}>
            <Field name="email" placeholder="E-mail" validate={required} component={InputField} />
          </View>
          <View style={styles.password}>
            <Field
              name="password"
              placeholder="Password"
              validate={required}
              component={InputField}
            />
          </View>
          <SubmitButton text="Sign In" onPress={handleSubmit} />
        </View>
      )}
    </Form>
  );
};

export default SignInScreen;

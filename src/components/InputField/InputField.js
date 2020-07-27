import React from "react";
import { TextInput } from "react-native";
import styles from "./styles";

const InputField = ({ input, meta, placeholder }) => {
  return (
    <TextInput
      style={styles.inputField}
      returnKeyType="go"
      {...input}
      placeholder={(meta.submitFailed && meta.error) || placeholder}
      placeholderTextColor={meta.submitFailed ? "red" : "#C7C7CD"}
      autoCapitalize="none"
    />
  );
};

export default InputField;

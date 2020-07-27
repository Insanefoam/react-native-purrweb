import React from "react";
import { View, Text } from "react-native";
import SubmitButton from "../../components/SubmitButton";
import styles from "./styles";

const AuthScreen = ({ navigation }) => {
  navigation.setOptions({ headerTitle: () => undefined });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trello</Text>
      <View style={styles.buttonContainer}>
        <SubmitButton onPress={() => navigation.navigate("SignInScreen")} text="Sign In" />
      </View>
      <View style={styles.buttonContainer}>
        <SubmitButton onPress={() => navigation.navigate("SignUpScreen")} text="Sign Up" />
      </View>
    </View>
  );
};

export default AuthScreen;

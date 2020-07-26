import React from "react";
import { View, Button, Text } from "react-native";
import { useDispatch } from "react-redux";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

const AddColumnScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  navigation.setOptions({
    headerTitle: () => undefined,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter new column name:</Text>
      <TextInput style={styles.input} returnKeyType="go" />
      <TouchableOpacity style={styles.button}>
        <View>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AddColumnScreen;

import React from "react";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Form, Field } from "react-final-form";
import { addColumn } from "../../store/actions";
import styles from "./styles";

const AddColumnScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  navigation.setOptions({
    headerTitle: () => undefined,
  });

  const handleSubmit = ({ column }, form) => {
    dispatch(addColumn(column));
    setTimeout(form.reset);
    navigation.navigate("DeskScreen");
  };

  return (
    <Form onSubmit={handleSubmit}>
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Enter new column name:</Text>
          <Field
            name="column"
            validate={(value) => (value ? undefined : "Column name cannot be empty")}
          >
            {({ input, meta }) => (
              <View>
                <TextInput
                  style={styles.input}
                  {...input}
                  returnKeyType="go"
                  onSubmitEditing={handleSubmit}
                />
                {meta.submitFailed && <Text style={styles.error}>{meta.error}</Text>}
              </View>
            )}
          </Field>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <View>
              <Text style={styles.buttonText}>SUBMIT</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </Form>
  );
};

export default AddColumnScreen;

import React from "react";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";
import { TextInput } from "react-native-gesture-handler";
import { Form, Field } from "react-final-form";
import { addColumn } from "../../store/actions";
import styles from "./styles";
import { addColumnBackend } from "../../api";
import SubmitButton from "../../components/SubmitButton";
import DefaultHeader from "../../components/Header/DefaultHeader";

const AddColumnScreen = ({ navigation }) => {
  navigation.setOptions({ header: () => <DefaultHeader navigation={navigation} /> });

  const dispatch = useDispatch();

  const handleSubmit = ({ column }, form) => {
    addColumnBackend(column)
      .then(({ data }) => {
        dispatch(addColumn(data.id, column));
        setTimeout(form.reset);
        navigation.navigate("DeskScreen");
      })
      .catch((err) => alert("Something went wrong :("));
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
          <SubmitButton text="SUBMIT" onPress={handleSubmit} />
        </View>
      )}
    </Form>
  );
};

export default AddColumnScreen;

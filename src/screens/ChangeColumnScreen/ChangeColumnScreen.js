import React from "react";
import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Form, Field } from "react-final-form";
import { selectColumnName } from "../../store/selectors";
import SubmitButton from "../../components/SubmitButton";
import InputField from "../../components/InputField/InputField";
import styles from "./styles";
import { changeColumnBackend } from "../../api";
import { changeColumnTitle } from "../../store/actions";

const required = (value) => (value ? undefined : "Required field");

const ChangeColumnScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const columnName = useSelector((state) => selectColumnName(state, id));
  const dispatch = useDispatch();

  navigation.setOptions({
    headerTitle: () => undefined,
  });

  const submitHandler = ({ column }, form) => {
    changeColumnBackend(id, column).then((res) => {
      dispatch(changeColumnTitle(id, column));
      setTimeout(form.reset);
      navigation.navigate("DeskScreen");
    });
  };

  return (
    <Form onSubmit={submitHandler}>
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Enter new name for column:</Text>
          <Field
            name="column"
            defaultValue={columnName}
            validate={required}
            component={InputField}
          />
          <SubmitButton text="SUBMIT" onPress={handleSubmit} />
        </View>
      )}
    </Form>
  );
};

export default ChangeColumnScreen;

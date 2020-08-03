import React from "react";
import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Form, Field } from "react-final-form";
import { selectCard } from "store/selectors";
import SubmitButton from "components/SubmitButton";
import InputField from "components/InputField/InputField";
import { changeDescriptionBackend } from "api";
import { changeCardDescription } from "store/actions";
import DefaultHeader from "components/Header/DefaultHeader";
import styles from "./styles";

const required = (value) => (value ? undefined : "Required field");

const ChangeDescriptionScreen = ({ route, navigation }) => {
  navigation.setOptions({ header: () => <DefaultHeader navigation={navigation} /> });

  const { id } = route.params;
  const card = useSelector((state) => selectCard(state, id));
  const dispatch = useDispatch();

  const submitHandler = ({ description }, form) => {
    changeDescriptionBackend(id, description).then((res) => {
      dispatch(changeCardDescription(id, description));
      setTimeout(form.reset);
      navigation.goBack();
    });
  };

  return (
    <Form onSubmit={submitHandler}>
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Enter new description:</Text>
          <View style={styles.input}>
            <Field
              name="description"
              defaultValue={card.description}
              validate={required}
              component={InputField}
            />
          </View>
          <SubmitButton text="SUBMIT" onPress={handleSubmit} />
        </View>
      )}
    </Form>
  );
};

export default ChangeDescriptionScreen;

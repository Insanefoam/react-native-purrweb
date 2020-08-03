import React from "react";
import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Form, Field } from "react-final-form";
import { selectCard } from "store/selectors";
import SubmitButton from "components/SubmitButton";
import InputField from "components/InputField/InputField";
import { changeCardBackend } from "api";
import { changeCardName } from "store/actions";
import DefaultHeader from "components/Header/DefaultHeader";
import styles from "./styles";

const required = (value) => (value ? undefined : "Required field");

const ChangeCardScreen = ({ route, navigation }) => {
  navigation.setOptions({ header: () => <DefaultHeader navigation={navigation} /> });

  const { id } = route.params;
  const cardName = useSelector((state) => selectCard(state, id)).title;
  const dispatch = useDispatch();

  const submitHandler = ({ card }, form) => {
    changeCardBackend(id, card).then((res) => {
      dispatch(changeCardName(id, card));
      setTimeout(form.reset);
      navigation.navigate("ColumnScreen");
    });
  };

  return (
    <Form onSubmit={submitHandler}>
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Enter new name for card:</Text>
          <View style={styles.input}>
            <Field name="card" defaultValue={cardName} validate={required} component={InputField} />
          </View>
          <SubmitButton text="SUBMIT" onPress={handleSubmit} />
        </View>
      )}
    </Form>
  );
};

export default ChangeCardScreen;

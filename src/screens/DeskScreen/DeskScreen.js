import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { View, ScrollView } from "react-native";
import { Form, Field } from "react-final-form";
import { TextInput } from "react-native-gesture-handler";
import { getColumns } from "../../store/selectors";
import ColumnButton from "../../components/ColumnButton";
import styles from "./styles";

const CustomInput = ({ input, meta, ...rest }) => (
  <View>
    <TextInput />
  </View>
);

const DeskScreen = ({ navigation }) => {
  const columns = useSelector(getColumns);

  const renderColumns = () => {
    return columns.map((column) => (
      <ColumnButton
        text={column.title}
        onPress={() => navigation.navigate("ColumnScreen", { id: column.columnId })}
        key={column.columnId}
      />
    ));
  };

  const onSubmit = (values) => {
    alert(JSON.stringify(values, 0, 2));
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.columnsContainer}>
        {renderColumns(columns)}
      </ScrollView>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <View>
            <Field name="custom" component={CustomInput} va />
          </View>
        )}
      />
    </View>
  );
};

DeskScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default DeskScreen;

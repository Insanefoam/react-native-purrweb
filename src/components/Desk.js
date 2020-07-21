import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet, Button, ScrollView, TextInput, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getColumns } from "../store/selectors";
import { addColumn } from "../store/actions";
import Row from "./Row";

const styles = StyleSheet.create({
  columnsContainer: {
    alignItems: "center",
  },
  inputContainer: {
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  inputField: {
    width: 300,
    borderWidth: 1,
    marginRight: 20,
    padding: 5,
  },
});

const Desk = ({ navigation }) => {
  const columns = useSelector(getColumns);
  const dispatch = useDispatch();
  const [newColumn, setNewColumn] = useState("");

  const renderColumns = () => {
    return columns.map((column) => (
      <Row
        text={column.title}
        id={column.columnId}
        onPress={() => navigation.navigate("Column", { id: column.columnId })}
      />
    ));
  };

  const addNewColumn = () => {
    if (newColumn) {
      dispatch(addColumn(newColumn));
      setNewColumn("");
    } else {
      Alert.alert("Слишком короткое название столбца");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          onChangeText={(text) => setNewColumn(text)}
          value={newColumn}
        />
        <Button onPress={addNewColumn} title="+" />
      </View>
      <ScrollView contentContainerStyle={styles.columnsContainer}>
        {renderColumns(columns)}
      </ScrollView>
    </View>
  );
};

Desk.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Desk;

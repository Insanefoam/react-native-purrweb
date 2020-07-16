import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getColumnName } from "../store/selectors";
import { changeColumnTitle } from "../store/actions";

const styles = StyleSheet.create({
  columnContainer: {
    marginBottom: 50,
    borderWidth: 1,
    borderRadius: 4,
    textAlign: "center",
    padding: 15,
    width: 345,
  },
  columnText: {
    fontSize: 25,
  },
});

const Column = ({ id }) => {
  const title = useSelector((state) => getColumnName(state, id));
  const dispatch = useDispatch();

  return (
    <View style={styles.columnContainer}>
      <TextInput value={title} onChangeText={(text) => dispatch(changeColumnTitle(id, text))} />
    </View>
  );
};

export default Column;

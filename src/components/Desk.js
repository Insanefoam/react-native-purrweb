import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import { getColumns } from "../store/selectors";
import Column from "./Column";
import { addColumn } from "../store/actions";

const styles = StyleSheet.create({
  titleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    justifyContent: "flex-end",
    width: "100%",
    paddingVertical: 20,
    marginBottom: 20,
    flexDirection: "row",
  },
  title: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    marginRight: 30,
  },
  columnsContainer: {
    alignItems: "center",
  },
});

const Desk = () => {
  const columns = useSelector(getColumns);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>My Desk</Text>
        <Button title="Add column" onPress={() => dispatch(addColumn())} />
      </View>
      <ScrollView contentContainerStyle={styles.columnsContainer}>
        {columns.map((column) => (
          <Column id={column.columnId} key={column.columnId} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Desk;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getColumns } from "../store/selectors";
import { addColumn } from "../store/actions";

const styles = StyleSheet.create({
  columnsContainer: {
    alignItems: "center",
  },
  columnContainer: {
    marginBottom: 50,
    borderWidth: 1,
    borderRadius: 4,
    textAlign: "center",
    padding: 15,
    width: 345,
  },
});

const Desk = ({ navigation }) => {
  const columns = useSelector(getColumns);
  const dispatch = useDispatch();

  const renderColumns = () => {
    return columns.map((column) => (
      <TouchableOpacity
        key={column.columnId}
        onPress={() => navigation.navigate("Column", { id: column.columnId })}
      >
        <View style={styles.columnContainer}>
          <Text>{column.title}</Text>
        </View>
      </TouchableOpacity>
    ));
  };

  navigation.setOptions({
    headerTitle: "My Desk",
    headerRight: () => <Button title="+" color="#72A8BC" onPress={() => dispatch(addColumn())} />,
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.columnsContainer}>
        {renderColumns(columns)}
      </ScrollView>
    </View>
  );
};

export default Desk;

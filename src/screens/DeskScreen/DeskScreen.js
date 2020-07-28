import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { View, ScrollView } from "react-native";
import { getColumns } from "../../store/selectors";
import Header from "../../components/Header";
import ColumnButton from "../../components/ColumnButton";
import AddColumn from "../../components/AddColumn";
import { getColumnsAsync } from "../../api/index";
import styles from "./styles";

const DeskScreen = ({ navigation }) => {
  const columns = useSelector(getColumns);
  getColumnsAsync().then((res) => console.log(res));
  navigation.setOptions({
    headerTitle: () => (
      <Header
        title="My Desk"
        MyButton={AddColumn}
        pressHandler={() => navigation.navigate("AddColumnScreen")}
      />
    ),
  });

  const renderColumns = () => {
    return columns.map((column) => (
      <ColumnButton
        text={column.title}
        onPress={() => navigation.navigate("ColumnScreen", { id: column.columnId })}
        key={column.columnId}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.columnsContainer}>
        {renderColumns(columns)}
      </ScrollView>
    </View>
  );
};

DeskScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default DeskScreen;

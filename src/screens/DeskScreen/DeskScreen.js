import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { View, ScrollView, Text } from "react-native";
import { selectColumns } from "../../store/selectors";
import Header from "../../components/Header";
import ColumnButton from "../../components/ColumnButton";
import AddColumn from "../../components/AddColumn";
import styles from "./styles";
import { getColumns } from "../../api";
import { initColumns } from "../../store/actions";

const DeskScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const columns = useSelector(selectColumns);
  const dispatch = useDispatch();

  navigation.setOptions({
    headerTitle: () => (
      <Header
        title="My Desk"
        MyButton={AddColumn}
        pressHandler={() => navigation.navigate("AddColumnScreen")}
      />
    ),
  });

  useEffect(() => {
    getColumns().then((res) => {
      setLoading(false);
      dispatch(initColumns(res));
    });
  }, []);

  const renderColumns = () => {
    return columns.map((column) => (
      <ColumnButton
        text={column.title}
        onPress={() => navigation.navigate("ColumnScreen", { id: column.id })}
        key={column.id}
      />
    ));
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Text style={styles.loading}>Loading...</Text>
      ) : (
        <ScrollView contentContainerStyle={styles.columnsContainer}>
          {renderColumns(columns)}
        </ScrollView>
      )}
    </View>
  );
};

DeskScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default DeskScreen;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { View, ScrollView, Text } from "react-native";
import DeskHeader from "components/Header/DeskHeader/DeskHeader";
import { selectColumns } from "store/selectors";
import ColumnButton from "components/ColumnButton";
import { getColumns } from "api";
import { setColumns } from "store/actions";
import styles from "./styles";

const DeskScreen = ({ navigation }) => {
  navigation.setOptions({ header: () => <DeskHeader navigation={navigation} /> });

  const [loading, setLoading] = useState(true);
  const columns = useSelector(selectColumns);
  const dispatch = useDispatch();

  useEffect(() => {
    getColumns().then((res) => {
      setLoading(false);
      dispatch(setColumns(res));
    });
  }, []);

  const renderColumns = () => {
    return columns.map((column) => (
      <ColumnButton
        id={column.id}
        text={column.title}
        navigateColumn={() => navigation.navigate("ColumnScreen", { id: column.id })}
        navigateChangeColumn={() => navigation.navigate("ChangeColumnScreen", { id: column.id })}
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

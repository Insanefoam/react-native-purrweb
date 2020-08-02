import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { selectColumnName } from "../../../store/selectors";

const ColumnHeader = ({ params, navigation }) => {
  const title = useSelector((state) => selectColumnName(state, params.id));
  return (
    <SafeAreaView>
      <Text>{title}</Text>
    </SafeAreaView>
  );
};

export default ColumnHeader;

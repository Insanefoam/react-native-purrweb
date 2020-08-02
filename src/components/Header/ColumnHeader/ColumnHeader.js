import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { selectColumnName } from "../../../store/selectors";
import styles from "./styles";
import BackButton from "../../BackButton";

const ColumnHeader = ({ params, navigation }) => {
  const title = useSelector((state) => selectColumnName(state, params.id));
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <BackButton pressHandler={navigation.goBack} fillColor="#000" />
      </View>
      <Text style={styles.text}>{title}</Text>
    </SafeAreaView>
  );
};

export default ColumnHeader;

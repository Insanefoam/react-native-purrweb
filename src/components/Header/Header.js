import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import DeskHeader from "./DeskHeader/DeskHeader";
import ColumnHeader from "./ColumnHeader/ColumnHeader";

const Header = ({ screen, navigation, params }) => {
  switch (screen) {
    case "DeskScreen":
      return <DeskHeader navigation={navigation} />;
    case "ColumnScreen":
      return <ColumnHeader params={params} navigation={navigation} />;
    default:
      return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}>Default header</Text>
        </SafeAreaView>
      );
  }
};

export default Header;

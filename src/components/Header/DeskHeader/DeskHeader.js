import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoutButton from "../../LogoutButton";
import AddColumn from "../../AddColumn";
import styles from "./styles";

const DeskHeader = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <LogoutButton onPress={() => navigation.navigate("AuthScreen")} />
        <Text style={styles.text}>My Desk</Text>
        <AddColumn pressHandler={() => navigation.navigate("AddColumnScreen")} />
      </View>
    </SafeAreaView>
  );
};

export default DeskHeader;

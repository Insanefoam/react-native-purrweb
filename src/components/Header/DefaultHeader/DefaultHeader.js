import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "components/BackButton";
import styles from "./styles";

const DefaultHeader = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <BackButton pressHandler={navigation.goBack} fillColor="#000" />
      </View>
    </SafeAreaView>
  );
};

export default DefaultHeader;

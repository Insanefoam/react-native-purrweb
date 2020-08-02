import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import styles from "./styles";
import { selectCard } from "../../../store/selectors";
import BackButton from "../../BackButton";

const CardHeader = ({ params, navigation }) => {
  const card = useSelector((state) => selectCard(state, params.id));
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <BackButton pressHandler={navigation.goBack} fillColor="#fff" />
      </View>
      <Text style={styles.text}>{card.title}</Text>
    </SafeAreaView>
  );
};

export default CardHeader;

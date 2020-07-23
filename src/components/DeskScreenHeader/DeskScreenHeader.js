import React from "react";
import { View, Text, Button, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { addColumn } from "../../store/actions";
import styles from "./styles";

const DeskScreenHeader = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>My Desk</Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => dispatch(addColumn(""))}>
        <Image source={require("../../../assets/plus.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default DeskScreenHeader;

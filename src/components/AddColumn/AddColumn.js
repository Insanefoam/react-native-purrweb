import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native";
import { useDispatch } from "react-redux";
import { addColumn } from "../../store/actions";
import styles from "./styles";

const AddColumn = () => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={() => dispatch(addColumn(""))}>
      <Image source={require("../../../assets/plus.png")} />
    </TouchableOpacity>
  );
};

export default AddColumn;

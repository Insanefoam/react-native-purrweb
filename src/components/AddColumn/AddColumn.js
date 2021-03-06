import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Plus from "assets/plus.svg";
import styles from "./styles";

const AddColumn = ({ pressHandler }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={pressHandler}>
      <Plus width={15} height={15} />
    </TouchableOpacity>
  );
};

export default AddColumn;

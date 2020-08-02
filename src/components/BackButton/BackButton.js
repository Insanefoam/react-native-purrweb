import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Back from "../../../assets/back.svg";

const BackButton = ({ pressHandler }) => {
  return (
    <TouchableOpacity onPress={pressHandler}>
      <Back width={25} height={25} fill="#000" />
    </TouchableOpacity>
  );
};

export default BackButton;

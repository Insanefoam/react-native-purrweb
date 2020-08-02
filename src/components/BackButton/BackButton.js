import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Back from "../../../assets/back.svg";

const BackButton = ({ pressHandler, fillColor }) => {
  return (
    <TouchableOpacity onPress={pressHandler}>
      <Back width={25} height={25} fill={fillColor} />
    </TouchableOpacity>
  );
};

export default BackButton;

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import Trash from "../../../assets/trash.svg";
import styles from "./styles";
import { deleteColumnBackend } from "../../api";
import { deleteColumn } from "../../store/actions";

const ColumnButton = ({ id, text, onPress }) => {
  const dispatch = useDispatch();

  const handlePress = () => {
    deleteColumnBackend(id).then((res) => {
      dispatch(deleteColumn(id));
    });
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <TouchableOpacity style={styles.imageContainer} onPress={handlePress}>
        <Trash width={20} height={20} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ColumnButton;

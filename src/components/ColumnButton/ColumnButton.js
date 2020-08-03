import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import Trash from "assets/trash.svg";
import Pencil from "assets/pencil.svg";
import { deleteColumnBackend } from "api";
import { deleteColumn } from "store/actions";
import styles from "./styles";

const ColumnButton = ({ id, text, navigateColumn, navigateChangeColumn }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    deleteColumnBackend(id).then(() => {
      dispatch(deleteColumn(id));
    });
  };

  return (
    <TouchableOpacity onPress={navigateColumn} style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <TouchableOpacity style={styles.imageContainer} onPress={navigateChangeColumn}>
        <Pencil width={20} height={20} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.imageContainer} onPress={deleteHandler}>
        <Trash width={20} height={20} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ColumnButton;

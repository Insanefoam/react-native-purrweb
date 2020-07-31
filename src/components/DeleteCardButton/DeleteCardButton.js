import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native";
import { useDispatch } from "react-redux";
import styles from "./styles";
import { deleteCardBackend } from "../../api";
import { deleteCard } from "../../store/actions";

const DeleteCardButton = ({ id }) => {
  const dispatch = useDispatch();

  const pressHandler = () => {
    deleteCardBackend(id).then((res) => {
      dispatch(deleteCard(id));
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={pressHandler}>
      <Text style={styles.text}>Delete</Text>
    </TouchableOpacity>
  );
};

export default DeleteCardButton;

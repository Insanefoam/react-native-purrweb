import React, { useState } from "react";
import { View, TextInput, Image } from "react-native";
import { useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { addCard } from "../../store/actions";
import styles from "./styles";

const AddCard = ({ columnId }) => {
  const [newCard, setNewCard] = useState("");
  const dispatch = useDispatch();

  const addNewCard = () => {
    if (newCard) {
      dispatch(addCard(newCard, columnId, ""));
      setNewCard("");
    } else {
      alert("Слишком короткое имя карточки");
    }
  };

  // onSubmit = ({cartNmae}) => cartNmae ? dispatch :
  // Final Form
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={addNewCard} style={styles.button}>
        <Image source={require("../../../assets/plus.png")} />
      </TouchableOpacity>
      <TextInput
        style={styles.inputField}
        returnKeyType="go"
        onChangeText={(text) => setNewCard(text)}
        value={newCard}
        placeholder="Add new card..."
        onSubmitEditing={addNewCard}
      />
    </View>
  );
};

export default AddCard;

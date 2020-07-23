import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import { addCard } from "../store/actions";

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#E5E5E5",
    width: 345,
  },
  inputField: {
    width: 300,
    marginRight: 20,
    padding: 5,
  },
});

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

  return (
    <View style={styles.inputContainer}>
      <Button onPress={addNewCard} title="+" />
      <TextInput
        style={styles.inputField}
        onChangeText={(text) => setNewCard(text)}
        value={newCard}
        placeholder="Add new card..."
        onSubmitEditing={addNewCard}
      />
    </View>
  );
};

export default AddCard;

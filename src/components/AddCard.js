import React, { useState } from "react";
import { View, StyleSheet, TextInput, Image } from "react-native";
import { useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { addCard } from "../store/actions";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    paddingLeft: 15,
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
    <View style={styles.container}>
      <TouchableOpacity onPress={addNewCard}>
        <Image source={require("../../assets/plus.png")} />
      </TouchableOpacity>
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

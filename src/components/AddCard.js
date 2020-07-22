import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 10,
    borderWidth: 1,
  },
  inputField: {
    width: 300,
    marginRight: 20,
    padding: 5,
  },
});

const AddCard = () => {
  const [newCard, setNewCard] = useState("");

  const addNewCard = () => {
    if (newCard) {
      dispatch(addCard(newCard, id, ""));
      setNewCard("");
    } else {
      Alert.alert("Слишком короткое имя карточки");
    }
  };

  return (
    <View style={styles.inputContainer}>
      <Button onPress={addNewCard} title="+" />
      <TextInput
        style={styles.inputField}
        onChangeText={(text) => setNewCard(text)}
        value={newCard}
      />
    </View>
  );
};

export default AddCard;

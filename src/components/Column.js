import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  ScrollView,
  TextInput,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getCards } from "../store/selectors";
import { addCard } from "../store/actions";

const styles = StyleSheet.create({
  cardsContainer: {
    alignItems: "center",
  },
  cardContainer: {
    marginBottom: 50,
    borderWidth: 1,
    borderRadius: 4,
    textAlign: "center",
    padding: 15,
    width: 345,
  },
  inputContainer: {
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  inputField: {
    width: 300,
    borderWidth: 1,
    marginRight: 20,
    padding: 5,
  },
});

const Column = ({ route, navigation }) => {
  const { id } = route.params;
  const cards = useSelector((state) => getCards(state, id));
  const [newCard, setNewCard] = useState("");
  const dispatch = useDispatch();

  const renderCards = () => {
    return cards.map((card) => (
      <TouchableOpacity key={card.cardId}>
        <View style={styles.cardContainer}>
          <Text>{card.name}</Text>
        </View>
      </TouchableOpacity>
    ));
  };

  const addNewCard = () => {
    dispatch(addCard(newCard, id, ""));
    setNewCard("");
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          onChangeText={(text) => setNewCard(text)}
          value={newCard}
        />
        <Button onPress={addNewCard} title="+" />
      </View>
      <View style={styles.cardsContainer}>
        <ScrollView>{renderCards()}</ScrollView>
      </View>
    </View>
  );
};

export default Column;

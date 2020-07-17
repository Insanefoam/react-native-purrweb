import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button, ScrollView } from "react-native";
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
});

const Column = ({ route, navigation }) => {
  const { id } = route.params;
  const cards = useSelector((state) => getCards(state, id));
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

  navigation.setOptions({
    headerTitle: "Column",
    headerRight: () => (
      <Button title="+" color="#72A8BC" onPress={() => dispatch(addCard("", id))} />
    ),
  });

  return (
    <View style={styles.cardsContainer}>
      <ScrollView>{renderCards()}</ScrollView>
    </View>
  );
};

export default Column;

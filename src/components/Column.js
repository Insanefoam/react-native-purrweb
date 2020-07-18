import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { getCards, getCommentsCount } from "../store/selectors";
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

  const dispatch = useDispatch();
  const [newCard, setNewCard] = useState("");
  const commentsCount = (cardId) => useSelector((state) => getCommentsCount(state, cardId));

  const renderCards = () => {
    return cards.map((card) => (
      <TouchableOpacity
        key={card.cardId}
        onPress={() => navigation.navigate("Card", { id: card.cardId })}
      >
        <View style={styles.cardContainer}>
          <Text>
            {card.name} with {commentsCount(card.cardId)} comments
          </Text>
        </View>
      </TouchableOpacity>
    ));
  };

  const addNewCard = () => {
    if (newCard) {
      dispatch(addCard(newCard, id, ""));
      setNewCard("");
    } else {
      Alert.alert("Слишком короткое имя карточки");
    }
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

Column.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default Column;

import React, { useState } from "react";
import { View, Button, ScrollView, TextInput, Alert } from "react-native";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { getCards, getCommentsCount } from "../../store/selectors";
import { addCard, changeCardName } from "../../store/actions";
import Row from "../../components/Row";
import styles from "./styles";

const ColumnScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const cards = useSelector((state) => getCards(state, id));

  const dispatch = useDispatch();
  const [newCard, setNewCard] = useState("");
  const commentsCount = (cardId) => useSelector((state) => getCommentsCount(state, cardId));

  const renderCards = () => {
    return cards.map((card) => (
      <Row
        text={card.name}
        // commentsCount={commentsCount(card.cardId)}
        onPress={() => navigation.navigate("Card", { id: card.cardId })}
        onChangeText={(name) => dispatch(changeCardName(card.cardId, name))}
        key={card.cardId}
      />
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

ColumnScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default ColumnScreen;

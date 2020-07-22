import React from "react";
import { View, ScrollView } from "react-native";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getCards, getCommentsCount } from "../../store/selectors";
import styles from "./styles";
import CardButton from "../../components/CardButton";
import AddCard from "../../components/AddCard";

const ColumnScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const cards = useSelector((state) => getCards(state, id));

  const renderCards = () => {
    return cards.map((card) => (
      <CardButton
        text={card.name}
        id={card.cardId}
        onPress={() => navigation.navigate("CardScreen", { id: card.cardId })}
        key={card.cardId}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <AddCard columnId={id} />
      <View>
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

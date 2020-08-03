import React, { useEffect, useState } from "react";
import { View, ScrollView, Text } from "react-native";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { selectCards } from "../../store/selectors";
import styles from "./styles";
import CardButton from "../../components/CardButton";
import AddCard from "../../components/AddCard/AddCard";
import { getCards } from "../../api";
import { setCards } from "../../store/actions";
import ColumnHeader from "../../components/Header/ColumnHeader/ColumnHeader";

const ColumnScreen = ({ route, navigation }) => {
  navigation.setOptions({
    header: () => <ColumnHeader params={route.params} navigation={navigation} />,
  });

  const { id } = route.params;
  const [loading, setLoading] = useState(true);
  const cards = useSelector((state) => selectCards(state, id));
  const dispatch = useDispatch();

  useEffect(() => {
    getCards().then((res) => {
      setLoading(false);
      dispatch(setCards(res));
    });
  }, []);

  const renderCards = () => {
    return cards.map((card) => (
      <CardButton
        text={card.title}
        id={card.id}
        navigateCard={() => navigation.navigate("CardScreen", { id: card.id })}
        navigateChangeCard={() => navigation.navigate("ChangeCardScreen", { id: card.id })}
        key={card.id}
      />
    ));
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Text style={styles.loading}>Loading...</Text>
      ) : (
        <View>
          <View style={styles.inputContainer}>
            <AddCard columnId={id} />
          </View>
          <ScrollView>
            <View>{renderCards()}</View>
          </ScrollView>
        </View>
      )}
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

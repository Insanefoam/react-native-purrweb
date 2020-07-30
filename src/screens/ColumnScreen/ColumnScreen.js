import React, { useEffect, useState } from "react";
import { View, ScrollView, Text } from "react-native";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { selectCards, selectColumnName } from "../../store/selectors";
import styles from "./styles";
import CardButton from "../../components/CardButton";
import AddCard from "../../components/AddCard/AddCard";
import Header from "../../components/Header";
import { getCards } from "../../api";
import { setCards } from "../../store/actions";

const ColumnScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [loading, setLoading] = useState(true);
  const cards = useSelector((state) => selectCards(state, id));
  const columnName = useSelector((state) => selectColumnName(state, id));
  const dispatch = useDispatch();

  navigation.setOptions({ headerTitle: () => <Header title={columnName} /> });

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
        onPress={() => navigation.navigate("CardScreen", { id: card.id })}
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
          <AddCard columnId={id} />
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

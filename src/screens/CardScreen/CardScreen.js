import React from "react";
import { View, Text, ScrollView } from "react-native";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getCard, getComments, getColumnName } from "../../store/selectors";
import styles from "./styles";
import AddComment from "../../components/AddComment";
import Comment from "../../components/Comment";

const CardScreen = ({ route }) => {
  const { id } = route.params;
  const card = useSelector((state) => getCard(state, id));
  const columnName = useSelector((state) => getColumnName(state, card.columnId));
  const comments = useSelector((state) => getComments(state, id));

  const renderComments = () => {
    return comments.map((comment) => (
      <Comment id={comment.id} name={comment.body} author="John Doe" key={comment.id} />
    ));
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.alignCenter}>
          <Text style={styles.name}>{card.name}</Text>
        </View>
        <View style={styles.alignCenter}>
          <Text style={styles.small}>{columnName}</Text>
        </View>
        <View style={styles.alignCenter}>
          <Text style={styles.small}>
            Author: <Text style={styles.bold}>{card.author}</Text>
          </Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionTitle}>DESCRIPTION</Text>
          <Text style={styles.descriptionText}>{card.description}</Text>
        </View>
      </View>
      <ScrollView>
        <Text style={styles.commentsTitle}>COMMENTS</Text>
        {renderComments()}
      </ScrollView>
      <AddComment cardId={id} />
    </View>
  );
};

CardScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default CardScreen;

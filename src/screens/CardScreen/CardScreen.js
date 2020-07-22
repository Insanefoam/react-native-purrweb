import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { getCard, getComments, getColumnName } from "../../store/selectors";
import styles from "./styles";
import AddComment from "../../components/AddComment";
import Comment from "../../components/Comment";

const CardScreen = ({ route }) => {
  const { id } = route.params;
  const card = useSelector((state) => getCard(state, id));
  const columnName = useSelector((state) => getColumnName(state, card.columnId));
  const comments = useSelector((state) => getComments(state, id));
  const dispatch = useDispatch();

  const renderComments = () => {
    return comments.map((comment) => (
      <Comment
        id={comment.commentId}
        name={comment.name}
        author={comment.author}
        key={comment.commentId}
      />
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
          <Text>Desciption: {card.description};</Text>
        </View>
      </View>
      <View>
        <Text style={styles.commentsTitle}>COMMENTS</Text>
        <ScrollView>
          {renderComments()}
          <AddComment id={id} />
        </ScrollView>
      </View>
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

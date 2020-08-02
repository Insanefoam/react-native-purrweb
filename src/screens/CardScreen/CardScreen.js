import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { selectCard, selectComments, selectColumnName } from "../../store/selectors";
import { getComments } from "../../api";
import styles from "./styles";
import AddComment from "../../components/AddComment";
import Comment from "../../components/Comment";
import { setComments } from "../../store/actions";

const CardScreen = ({ route }) => {
  const { id } = route.params;
  const [loading, setLoading] = useState(true);
  const card = useSelector((state) => selectCard(state, id));
  const columnName = useSelector((state) => selectColumnName(state, card.columnId));
  const comments = useSelector((state) => selectComments(state, id));
  const dispatch = useDispatch();

  useEffect(() => {
    getComments().then((res) => {
      setLoading(false);
      dispatch(setComments(res));
    });
  }, []);

  const renderComments = () => {
    return comments.map((comment) => (
      <Comment id={comment.id} name={comment.body} author={comment.author} key={comment.id} />
    ));
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Text style={styles.loading}>Loading...</Text>
      ) : (
        <ScrollView>
          <View>
            <View style={styles.alignCenter}>
              <Text style={styles.big}>{columnName}</Text>
            </View>
            <View style={styles.alignCenter}>
              <Text style={styles.big}>
                Author: <Text style={styles.bold}>John Doe</Text>
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
        </ScrollView>
      )}
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

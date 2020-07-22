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
import { getCard, getComments, getColumnName } from "../../store/selectors";
import { addComment } from "../../store/actions";

const CardScreen = ({ route }) => {
  const { id } = route.params;
  const card = useSelector((state) => getCard(state, id));
  const columnName = useSelector((state) => getColumnName(state, card.columnId));
  const comments = useSelector((state) => getComments(state, id));
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState("");

  const addNewComment = () => {
    if (newComment) {
      dispatch(addComment(id, newComment, ""));
      setNewComment("");
    } else {
      Alert.alert("Слишком короткий текст комментария");
    }
  };

  const renderComments = () => {
    return comments.map((comment) => (
      <TouchableOpacity key={comment.commentId}>
        <View style={styles.commentContainer}>
          <Text>{comment.name}</Text>
        </View>
      </TouchableOpacity>
    ));
  };

  return (
    <View>
      <View style={styles.infoContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{card.name}</Text>
        </View>
        <View>
          <Text>Author: {card.author};</Text>
        </View>
        <View>
          <Text>Desciption: {card.description};</Text>
        </View>
        <View>
          <Text>Column: {columnName}</Text>
        </View>
      </View>
      <View style={styles.commentsContainer}>
        <ScrollView>{renderComments()}</ScrollView>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          onChangeText={(text) => setNewComment(text)}
          value={newComment}
        />
        <Button onPress={addNewComment} title="+" />
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

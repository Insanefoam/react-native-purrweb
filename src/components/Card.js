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
import { getCard, getComments, getColumnName } from "../store/selectors";
import { addComment } from "../store/actions";

const styles = StyleSheet.create({
  commentsContainer: {
    alignItems: "center",
  },
  commentContainer: {
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

const Card = ({ route }) => {
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
      <View>
        <Text>
          Name: {card.name}; Author: {card.author}; Desciption: {card.description}; Column:{" "}
          {columnName}
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          onChangeText={(text) => setNewComment(text)}
          value={newComment}
        />
        <Button onPress={addNewComment} title="+" />
      </View>
      <View style={styles.commentsContainer}>
        <ScrollView>{renderComments()}</ScrollView>
      </View>
    </View>
  );
};

Card.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default Card;

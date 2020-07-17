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
import { useSelector, useDispatch } from "react-redux";
import { getCard, getComments } from "../store/selectors";
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
  const comments = useSelector((state) => getComments(state, id));
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState("");

  const addNewCard = () => {
    if (newComment) {
      dispatch(addComment(newComment, id, ""));
      setNewComment("");
    } else {
      Alert.alert("Слишком короткое имя карточки");
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
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          onChangeText={(text) => setNewComment(text)}
          value={newComment}
        />
        <Button onPress={addNewCard} title="+" />
      </View>
      <View style={styles.commentsContainer}>
        <ScrollView>{renderComments()}</ScrollView>
      </View>
    </View>
  );
};

export default Card;

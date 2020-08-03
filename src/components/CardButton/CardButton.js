import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Comment from "assets/comment.svg";
import Pencil from "assets/pencil.svg";
import { selectCommentsCount } from "store/selectors";

import styles from "./styles";
import DeleteCardButton from "../DeleteCardButton/DeleteCardButton";

const rightActionHandler = (id) => <DeleteCardButton id={id} />;

const CardButton = ({ text, id, navigateCard, navigateChangeCard }) => {
  const commentsCount = useSelector((state) => selectCommentsCount(state, id));

  return (
    <Swipeable renderRightActions={() => rightActionHandler(id)}>
      <TouchableOpacity onPress={navigateCard}>
        <View style={styles.container}>
          <Text style={styles.text}>{text}</Text>
          <TouchableOpacity onPress={navigateChangeCard}>
            <Pencil width={20} height={20} />
          </TouchableOpacity>
          <View style={styles.commentsContainer}>
            <Comment width={20} height={20} style={styles.image} />
            <Text>{commentsCount}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

export default CardButton;

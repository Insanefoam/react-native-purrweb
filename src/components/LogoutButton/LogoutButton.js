import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { logOutUser } from "store/actions";
import Logout from "assets/logout.svg";
import styles from "./styles";

const LogoutButton = ({ onPress }) => {
  const dispatch = useDispatch();
  const pressHandler = () => {
    dispatch(logOutUser());
    onPress();
  };

  return (
    <TouchableOpacity onPress={pressHandler} style={styles.container}>
      <Logout width={25} height={25} />
    </TouchableOpacity>
  );
};

export default LogoutButton;

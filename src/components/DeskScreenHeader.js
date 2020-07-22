import React from "react";
import { View, Text, Button, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { addColumn } from "../store/actions";

const DeskScreenHeader = () => {
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#E5E5E5",
      }}
    >
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ fontSize: 17, color: "#514D47" }}>My Desk</Text>
      </View>
      <TouchableOpacity
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        onPress={() => dispatch(addColumn(""))}
      >
        <Image source={require("../../assets/plus.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default DeskScreenHeader;

import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    width: 345,
    height: 60,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 4,
    justifyContent: "center",
    paddingLeft: 15,
    marginTop: 10,
  },
  text: { fontSize: 17, color: "#514D47", lineHeight: 20 },
});

// TODO: Autofocus (keyboard show) on longPress
const Row = ({ text, id, onPress, onTextChange }) => {
  const [editable, setEditable] = useState(false);

  return (
    <TouchableOpacity key={id} onPress={onPress} onLongPress={() => setEditable(!editable)}>
      <View style={styles.container}>
        <TextInput
          style={styles.text}
          editable={editable}
          onEndEditing={() => setEditable(!editable)}
        >
          {text}
        </TextInput>
      </View>
    </TouchableOpacity>
  );
};

export default Row;

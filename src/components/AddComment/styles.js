import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
    width: 345,
    paddingLeft: 15,
  },
  inputField: {
    marginLeft: 10,
    width: 300,
    padding: 5,
    color: "#9C9C9C",
  },
  error: {
    color: "red",
    opacity: 0.5,
    fontSize: 13,
  },
});

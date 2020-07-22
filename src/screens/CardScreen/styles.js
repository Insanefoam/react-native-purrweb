import { StyleSheet } from "react-native";

export default StyleSheet.create({
  infoContainer: { alignItems: "center" },
  commentsContainer: {
    alignItems: "center",
  },
  commentContainer: {
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 4,
    textAlign: "center",
    padding: 15,
    width: 345,
  },
  inputContainer: {
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 0,
  },
  inputField: {
    width: 300,
    borderWidth: 1,
    marginRight: 20,
    padding: 5,
  },
  name: {
    fontSize: 30,
  },
});

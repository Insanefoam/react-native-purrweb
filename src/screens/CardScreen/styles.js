import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  loading: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  alignCenter: {
    alignItems: "center",
  },
  name: {
    fontSize: 22,
  },
  small: { fontSize: 13 },
  bold: { fontWeight: "bold" },
  description: { marginTop: 10, paddingLeft: 15 },
  commentsTitle: {
    color: "#72A8BC",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    paddingVertical: 15,
    fontSize: 13,
    paddingLeft: 15,
  },
  descriptionTitle: {
    color: "#72A8BC",
    paddingVertical: 15,
    fontSize: 15,
  },
  descriptionText: {
    fontSize: 17,
  },
});

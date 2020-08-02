import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 15,
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
  big: { fontSize: 20, color: "#BFB393" },
  bold: { fontWeight: "bold", color: "#000" },
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

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  text: { fontSize: 17, color: "#514D47", lineHeight: 20, marginRight: 20 },
  commentsContainer: { flex: 1, flexDirection: "row", justifyContent: "flex-end" },
  image: { marginRight: 10 },
});

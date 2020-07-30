import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#E5E5E5" },
  textContainer: {
    padding: 15,
    flex: 1,
  },
  author: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#514D47",
  },
  name: { fontSize: 17, color: "#514D47" },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    paddingRight: 20,
  },
});

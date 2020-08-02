import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    backgroundColor: "#fff",
  },
  textContainer: { flex: 1, alignItems: "center" },
  text: { fontSize: 17, color: "#514D47" },
  buttonContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
});

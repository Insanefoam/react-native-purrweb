import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", alignItems: "center" },
  title: { fontSize: 17, color: "#514D47", lineHeight: 20, marginBottom: 30 },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#E5E5E5",
    width: 345,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#BFB393",
    borderRadius: 20,
    width: 200,
    alignItems: "center",
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "bold",
  },
});

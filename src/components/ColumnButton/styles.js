import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: 345,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 4,
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginTop: 10,
    flexDirection: "row",
  },
  textContainer: {
    flex: 1,
  },
  text: { fontSize: 17, color: "#514D47", lineHeight: 20 },
  imageContainer: {
    marginLeft: 15,
  },
});

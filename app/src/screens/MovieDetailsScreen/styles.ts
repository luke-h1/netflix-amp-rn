import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  match: {
    color: "#00aa00",
    fontWeight: "700",
    marginRight: 5,
  },
  year: {
    color: "#757575",
    marginRight: 5,
  },
  ageContainer: {
    backgroundColor: "#e6e229",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    paddingHorizontal: 3,
    marginRight: 5,
  },
  age: {
    color: "black",
    fontWeight: "bold",
  },
  playButton: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 3,
    marginVertical: 5,
  },

  playButtonText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "700",
  },

  downloadButton: {
    backgroundColor: "#2b2b2b",
    justifyContent: "center",
    marginVertical: 5,
    alignItems: "center",
    padding: 5,
    borderRadius: 3,
  },
  downloadButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
});
export default styles;

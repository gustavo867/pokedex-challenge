import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#28262E",
    width: width,
    height: height * 0.22,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 23,
    color: "#E3DADA",
    textTransform: "uppercase",
    marginLeft: 15,
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default styles;

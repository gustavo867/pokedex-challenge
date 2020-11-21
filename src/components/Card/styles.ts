import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3E3B47",
    width: width * 0.9,
    height: height * 0.25,
    paddingHorizontal: 20,
    marginTop: 10,
    borderRadius: 12,
  },
  name: {
    color: "#FFFF",
    fontSize: 20,
    fontWeight: "400",
  },
  orangeText: {
    color: "#FF9000",
    fontWeight: "700",
    textTransform: "capitalize",
    textAlign: "center",
  },
  image: {
    width: "60%",
    height: "60%",
    marginTop: -20,
  },
  pokeId: {
    fontSize: 24,
    color: "#666360",
    marginTop: 12,
    fontWeight: "700",
    letterSpacing: 1.2,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  typesContainer: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: width * 0.5,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: width * 0.5,
  },
});

export default styles;

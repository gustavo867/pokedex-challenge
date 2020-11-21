import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#28262E",
    width: width * 0.9,
    height: height * 0.08,
    flexDirection: "row",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  input: {
    marginLeft: 10,
    color: "#666360",
    fontSize: 16,
    fontWeight: "400",
  },
});

export default styles;

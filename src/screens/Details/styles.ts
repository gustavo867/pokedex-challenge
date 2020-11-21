import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#312e38",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#fff",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  pokeCard: {
    backgroundColor: "#3E3B47",
    borderRadius: 8,
    width: width * 0.9,
    height: height * 0.63,
    paddingHorizontal: 15,
  },
  pokeId: {
    fontSize: 28,
    color: "#666360",
    marginTop: 12,
    fontWeight: "700",
    letterSpacing: 1.2,
  },
  pokeImage: {
    width: 150,
    height: 150,
    marginTop: -20,
  },
  pokeName: {
    color: "#FF9000",
    fontSize: 28,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginTop: 12,
  },
  info: {
    alignItems: "center",
    justifyContent: "center",
  },
  infoTop: {
    fontWeight: "400",
    fontSize: 24,
    color: "#F4EDE8",
  },
  infoText: {
    fontWeight: "400",
    fontSize: 16,
    color: "#666360",
  },
  statsContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    width: width * 0.85,
  },
  stat: {
    fontSize: 16,
    fontWeight: "400",
    width: 50,
    color: "#F4EDE8",
    textTransform: "uppercase",
  },
  statNumber: {
    color: "#F4EDE8",
    fontSize: 14,
    fontWeight: "400",
  },
  row: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 10,
    alignItems: "center",
  },
  backText: {
    color: "#FF9000",
    fontWeight: "400",
    fontSize: 24,
    marginLeft: 2,
  },
  familyContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default styles;

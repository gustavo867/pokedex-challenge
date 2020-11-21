import React from "react";
import { View, Text, Dimensions } from "react-native";

import styles from "./styles";

interface Props {
  stat: number;
  name: string;
}

const { width, height } = Dimensions.get("window");

const Graph: React.FC<Props> = ({ stat, name }) => {
  const statName = (stat: string) => {
    if (stat === "hp") return "Hp";
    if (stat === "attack") return "Atk";
    if (stat === "defense") return "Def";
    if (stat === "special-attack") return "Sp.Attack";
    if (stat === "special-defense") return "Sp.Defense";
    if (stat === "speed") return "Spd";
    return "HP";
  };

  return (
    <View
      style={{
        width: width * 0.8,
        height: 24,
        flexDirection: "row",
        marginTop: 12,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={styles.stat}>{statName(name)}</Text>
      <View
        style={{
          backgroundColor: "#C4C4C4",
          width: width * 0.6,
          borderRadius: 8,
        }}
      >
        <View
          style={{
            maxWidth: "100%",
            width: stat * 2.5,
            height: 24,
            backgroundColor: "#FF9000",
            borderRadius: 8,
            alignItems: "flex-end",
            paddingRight: 10,
          }}
        >
          <Text style={styles.statNumber}>{stat}/100</Text>
        </View>
      </View>
    </View>
  );
};

export default Graph;

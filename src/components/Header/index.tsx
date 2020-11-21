import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";

import pokeBall from "../../images/pokeBall.png";

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={pokeBall} style={styles.image} />
      <Text style={styles.title}>Pokémon Challenge</Text>
    </View>
  );
};

export default Header;

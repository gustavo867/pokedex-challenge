import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { PokeContext, Types } from "../../context/PokeContext";

import styles from "./styles";
import axios from "axios";

interface Item {
  name: string;
  url: string;
}

interface Props {
  item: Item;
}

interface Data {
  name: string;
  url: string;
}

const Card: React.FC<Props> = ({ item }) => {
  const { handleCurrentPoke } = useContext(PokeContext);
  const [types, setTypes] = useState<Types[]>();

  const id = item.url
    .replace("https://pokeapi.co/api/v2/pokemon/", "")
    .replace("/", "");

  const imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

  const { navigate } = useNavigation();

  const handleCurrentPokemon = useCallback(
    async (data: Data) => {
      const res = await axios.get(data.url);
      const evolution = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
      );

      const newData = {
        id: Number(id),
        name: data.name,
        weight: res.data.weight,
        height: res.data.height,
        stats: res.data.stats,
        evolution_chain: evolution.data.evolution_chain.url,
      };

      handleCurrentPoke(newData);

      navigate("Details");
    },
    [item]
  );

  async function loadTypes() {
    const res = await axios.get(item.url);

    setTypes(res.data.types);
  }

  useEffect(() => {
    loadTypes();
  }, []);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={() => handleCurrentPokemon(item)}
    >
      <Text style={styles.pokeId}>#{id}</Text>
      <View style={styles.center}>
        <Image
          style={styles.image}
          source={{ uri: imgUrl }}
          resizeMode="contain"
        />
        <View style={styles.center}>
          <View style={styles.textContainer}>
            <Text style={styles.name}>
              Name: <Text style={styles.orangeText}>{item.name}</Text>
            </Text>
          </View>
          <View style={styles.typesContainer}>
            <Text style={styles.name}>Types: </Text>
            {types !== undefined &&
              types.map((type, index) => {
                return (
                  <Text
                    key={index.toExponential(6).toString()}
                    style={[
                      styles.orangeText,
                      {
                        paddingTop: 5,
                      },
                    ]}
                  >
                    {type.type.name}{" "}
                  </Text>
                );
              })}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

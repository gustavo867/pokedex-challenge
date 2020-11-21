import React, { useCallback, useContext, useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import Header from "../../components/Header";
import { PokeContext } from "../../context/PokeContext";
import Graph from "./Graph";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Card from "../../components/Card";

interface Evolves {
  name: string;
  url: string;
}

const Details: React.FC = () => {
  const { currentPoke } = useContext(PokeContext);
  const [evolves, setEvolves] = useState<Evolves>();
  const [evolvesFrom, setEvolvesFrom] = useState<Evolves>();

  const { goBack } = useNavigation();

  function convertDecimetersToMetre(decimeter: number | undefined) {
    if (decimeter) {
      return decimeter / 10;
    }
  }

  function convertHectogramsToKgs(hectogram: number | undefined) {
    if (hectogram) {
      return (hectogram / 10).toFixed(2);
    }
  }

  useEffect(() => {
    setTimeout(async () => {
      if (currentPoke) {
        const res = await axios.get(currentPoke.evolution_chain);
        const data = res.data.chain;

        const evolvesTo = data.evolves_to[0].species;
        const evolesFromPoke = data.species;

        setEvolves(evolvesTo);
        setEvolvesFrom(evolesFromPoke);
      }
    }, 1000);
  }, []);

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${currentPoke?.id}.png`;

  const evolvesId = evolves?.url
    .replace("https://pokeapi.co/api/v2/pokemon-species/", "")
    .replace("/", "");
  const evolvesFromId = evolvesFrom?.url
    .replace("https://pokeapi.co/api/v2/pokemon-species/", "")
    .replace("/", "");
  const evolvesFromUrl = `https://pokeapi.co/api/v2/pokemon/${evolvesFromId}`;
  const evolvesUrl = `https://pokeapi.co/api/v2/pokemon/${evolvesId}`;

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <TouchableOpacity style={styles.row} onPress={() => navigateBack()}>
          <AntDesign name="arrowleft" size={25} color="#FF9000" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <View
          style={[
            styles.center,
            {
              marginTop: 21,
            },
          ]}
        >
          <View style={styles.pokeCard}>
            <Text style={styles.pokeId}>#{currentPoke?.id}</Text>
            <View style={styles.center}>
              <Image style={styles.pokeImage} source={{ uri: imgUrl }} />
              <Text style={styles.pokeName}>{currentPoke?.name}</Text>
              <View style={styles.infoContainer}>
                <View style={styles.info}>
                  <Text style={styles.infoTop}>
                    {convertHectogramsToKgs(currentPoke?.weight)} KG
                  </Text>
                  <Text style={styles.infoText}>Weight</Text>
                </View>
                <View style={styles.info}>
                  <Text style={styles.infoTop}>
                    {convertDecimetersToMetre(currentPoke?.height)} M
                  </Text>
                  <Text style={styles.infoText}>Height</Text>
                </View>
              </View>
              <View style={styles.statsContainer}>
                <Text style={styles.title}>Stats</Text>
                <Graph
                  name={currentPoke!.stats[0].stat.name}
                  stat={currentPoke!.stats[0].base_stat}
                />
                <Graph
                  name={currentPoke!.stats[1].stat.name}
                  stat={currentPoke!.stats[1].base_stat}
                />
                <Graph
                  name={currentPoke!.stats[2].stat.name}
                  stat={currentPoke!.stats[2].base_stat}
                />
                <Graph
                  name={currentPoke!.stats[5].stat.name}
                  stat={currentPoke!.stats[5].base_stat}
                />
              </View>
            </View>
          </View>
          <View style={styles.familyContainer}>
            <Text style={styles.title}>Family Tree</Text>
            {evolvesFrom && (
              <Card
                item={{
                  name: evolvesFrom.name,
                  url: evolvesFromUrl,
                }}
              />
            )}
            {evolves && (
              <Card
                item={{
                  name: evolves.name,
                  url: evolvesUrl,
                }}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Details;

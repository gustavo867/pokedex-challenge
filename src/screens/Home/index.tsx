import React, { useCallback, useContext, useEffect, useState } from "react";
import { View, FlatList, LogBox } from "react-native";
import { PokeContext, Types } from "../../context/PokeContext";

import axios from "axios";
import styles from "./styles";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Card from "../../components/Card";

const Home: React.FC = () => {
  const { handlePokemons, pokemons } = useContext(PokeContext);
  const [search, setSearch] = useState("");

  const PopulateData = useCallback(async () => {
    const pokeRes = await axios.get("https://pokeapi.co/api/v2/pokemon");

    handlePokemons(pokeRes.data.results);
  }, []);

  useEffect(() => {
    PopulateData();
    LogBox.ignoreLogs(["Encountered two children with the same"]);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.center}>
        <Input
          icon="search1"
          placeholder="Type the Pokémon name"
          value={search}
          onChangeText={(text) => setSearch(text)}
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>
      <FlatList
        data={pokemons.filter((item) => {
          return item.name.includes(search);
        })}
        keyExtractor={(item: { url: string }, index: number) => item.url}
        style={{
          flexGrow: 1,
          marginTop: 11,
          marginBottom: 10,
        }}
        renderItem={({ item }: any) => <Card item={item} />}
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </View>
  );
};

export default Home;

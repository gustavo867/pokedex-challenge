import React, { createContext, useState } from "react";

export interface Types {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface PokeContextProps {
  name: string;
  url: string;
}

interface Stats {
  base_stat: number;
  stat: {
    name: string;
    url: string;
  };
}

interface CurrentPoke {
  name: string;
  id: number;
  stats: Stats[];
  height: number;
  weight: number;
  evolution_chain: string;
}

interface ContextProps {
  pokemons: PokeContextProps[];
  handlePokemons(data: PokeContextProps[]): void;
  currentPoke: CurrentPoke | undefined;
  handleCurrentPoke(data: CurrentPoke): void;
}

const PokeContext = createContext<ContextProps>({} as ContextProps);

const PokeProvider: React.FC = ({ children }) => {
  const [pokemons, setPokemons] = useState<PokeContextProps[]>([]);
  const [currentPoke, setCurrentPoke] = useState<CurrentPoke>();

  function handlePokemons(data: PokeContextProps[]) {
    setPokemons(data);
  }

  function handleCurrentPoke(data: CurrentPoke) {
    setCurrentPoke(data);
  }

  return (
    <PokeContext.Provider
      value={{
        pokemons,
        handlePokemons,
        currentPoke,
        handleCurrentPoke,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};

export { PokeContext, PokeProvider };

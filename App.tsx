import { StatusBar } from "expo-status-bar";
import React from "react";
import { PokeProvider } from "./src/context/PokeContext";
import Routes from "./src/routes";

export default function App() {
  return (
    <PokeProvider>
      <StatusBar style="auto" />
      <Routes />
    </PokeProvider>
  );
}

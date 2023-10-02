"use client";

import { PokemonCard } from "@/components/PokemonCard";
import {
  Button,
  Container,
  Group,
  Loader,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import axios, { AxiosError } from "axios";
import { useState } from "react";

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [loadingPokemon, setLoadingPokemon] = useState(false);

  const callLoadPokemon = async () => {
    setLoadingPokemon(true);
    setPokemon(null);
    try {
      const resp = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${searchText}`
      );
      const result = resp.data;
      const computedResult = {};

      // setPokemon(computedResult);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 404) alert("Cannot find any pokemon");
      }
    }
    setLoadingPokemon(false);
  };

  return (
    <Container size="xs">
      <Stack gap="xs">
        <Title ta="center">Pokémon</Title>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            callLoadPokemon();
          }}
        >
          <Group preventGrowOverflow wrap="nowrap">
            <TextInput
              placeholder="Search with name or Pokédex number"
              w="100%"
            />
            <Button type="submit" disabled={loadingPokemon}>
              Search
            </Button>
          </Group>
        </form>
        {loadingPokemon && <Loader type="bars" mx="auto" size="xl" />}
      </Stack>
    </Container>
  );
}

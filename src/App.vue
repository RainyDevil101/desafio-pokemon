<script setup>
import { ref } from 'vue';
import { usePokemon } from './components/composable';
import { Container, Section, Header } from './components/global'
import { PokemonCard } from './components/pokemon';

const { getPokemon, isLoading, pokemons } = usePokemon();

getPokemon();

const discoveredPokemons = ref(0);

const incrementDiscoveredPokemons = () => {
  discoveredPokemons.value++;
};

</script>

<template>
  <Container>
    <Header :discoveredPokemons="discoveredPokemons" />
    <Section>
      <div v-if="isLoading">Loading...</div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <PokemonCard v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" @increment-discovered-pokemons="incrementDiscoveredPokemons" />
      </div>
    </Section>
  </Container>
</template>

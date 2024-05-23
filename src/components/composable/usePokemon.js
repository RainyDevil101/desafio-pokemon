import { ref } from 'vue';
import axios from 'axios';

export const usePokemon = () => {
  const isLoading = ref(false);
  const pokemons = ref([]);

  const getPokemon = async () => {
    try {
      isLoading.value = true;
      const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');
      const pokemonPromises = data.results.map((item) => getPokemonById(item));
      pokemons.value = await Promise.all(pokemonPromises);
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    } finally {
      isLoading.value = false;
    }
  };

  const getPokemonById = async (item) => {
    try {
      const { data } = await axios.get(item.url);
      return data;
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
      return null;
    }
  };
  return { isLoading, pokemons, getPokemon };
};

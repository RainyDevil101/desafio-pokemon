<script setup>

defineProps({
  discoveredPokemons: Number
});

</script>

<template>
  <header class="w-full my-[4rem] text-center">
    <img src="/assets/img/pokeapi_logo.png" class="mx-auto py-5" alt="logo image">
    <p class="font-bold my-5">¿Quién es ese Pokémon?</p>
    <p>Pokemones descubiertos: <span class="text-yellow-300">{{ discoveredPokemons }}</span></p>
  </header>
</template>
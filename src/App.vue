<script setup>
import { usePokemon } from './components/composable';
import { Container } from './components/global'

const { getPokemon } = usePokemon();

getPokemon();

</script>

<template>
  <Container>

  </Container>
</template>

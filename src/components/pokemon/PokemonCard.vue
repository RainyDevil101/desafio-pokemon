<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  pokemon: Object
});

const emit = defineEmits(['increment-discovered-pokemons']);

const isBlurred = ref(true);
const input = ref('');
const inputDisabled = ref(false);
const isError = ref(false);

const checkName = () => {
  if (input.value.trim().toLowerCase() === props.pokemon.name.toLowerCase()) {
    isBlurred.value = false;
    inputDisabled.value = true;
    isError.value = false;
    emit('increment-discovered-pokemons');
  } else {
    isBlurred.value = true;
    isError.value = true;
  }
};

watch(input, (newValue) => {
  if (newValue.trim().length > 0) {
    isError.value = false;
  }
});

</script>

<template>
  <div>
    <div class="max-w-64 mx-auto flex flex-col justify-center items-center p-2 bg-primary text-white rounded">
      <img :src="pokemon.sprite" :alt="pokemon.name" class="h-32 w-32 transition duration-300" :class="{
        'filter grayscale blur-sm': isBlurred,
        'filter-none': !isBlurred
      }" />
      <input class="input input-bordered w-full max-w-xs mt-2" type="text" maxlength="30" v-model="input"
        :disabled="inputDisabled" @keyup.enter="checkName" :class="{ 'input-error': isError }" />
    </div>
  </div>
</template>

<style scoped>
.filter {
  filter: grayscale(100%) blur(5px);
}

.filter-none {
  filter: none;
}
</style>
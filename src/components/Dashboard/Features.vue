<template>
  <div class="px-6 py-2 bg-white rounded-lg w-[933px] h-[153px]">
    <h2 class="text-xl font-semibold mb-4">Novas Funcionalidades</h2>
    <div class="mr-8">
      <div class="flex justify-between text-font-dash text-xs -mt-1">
        <h3>Funcionalidade</h3>
        <h3>Taxa De Uso</h3>
      </div>
      <div class="space-y-2 mt-2">
        <div
          v-for="(feature, index) in features"
          :key="index"
          :class="index % 2 === 0 ? 'bg-font-line' : ''"
          class="flex justify-between px-4 w-[876px] h-[27px]"
        >
          <h3>{{ feature.name }}</h3>
          <h3 class="text-font-taxa mr-3">{{ feature.usageRate }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Array de Novas Funcionalidades
const features = ref([
  {
    name: 'Veículo em Rota',
    usageRate: '92%',
  },
  {
    name: 'Avaliação de coleta',
    usageRate: '78%',
  },
]);
</script>

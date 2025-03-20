<template>
  <div class="px-6 py-2 bg-white rounded-lg w-[930px] h-[268px]">
    <h2 class="text-xl font-semibold mb-2">Feedbacks</h2>
    <table class="w-full">
      <thead>
        <tr class="text-left text-xs text-font-dash">
          <th class="w-[53px] h-[16px] py-1">Avaliação</th>
          <th class="w-[26px] h-[16px] px-2 py-1">Data</th>
          <th class="w-[53px] h-[16px] px-2 py-1">Avaliação</th>
          <th class="w-[53px] h-[16px] px-2 py-1">Melhorias</th>
          <th class="w-[60px] h-[16px] px-2 py-1">Plataforma</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(feedback, index) in feedbacks"
          :key="index"
          :class="index % 2 === 0 ? 'bg-font-line' : 'bg-white'"
        >
          <td class="w-[300px] h-[41px] px-2 py-1">
            <p class="text-[10px] text-justify text-font-text-dash">
              {{ feedback.text }}
            </p>
          </td>
          <td class="w-[50px] h-[16px] px-2 py-1">
            <p class="text-xs -mt-6">{{ feedback.date }}</p>
          </td>
          <td class="w-[8px] h-[16px] px-2 py-1">
            <p class="text-xs -mt-6">{{ feedback.rating }}</p>
          </td>
          <td class="w-[105px] h-[16px] px-2 py-1">
            <p class="text-xs -mt-5">{{ feedback.improvements }}</p>
          </td>
          <td class="w-[60px] h-[16px] px-2 py-1">
            <p class="text-xs -mt-6">{{ feedback.platform }}</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Array para Feedbacks
const feedbacks = ref([
  {
    text: 'Aplicativo muito bom, porém poderiam atualizar mensalmente com os dados da qualidade do leite. Quando vira o mês o aplicativo apaga os dados da produção dos meses anteriores, não sendo possível consultar os meses anteriores. Antes não tinha esse problema.',
    date: '01/04/24',
    rating: '4',
    improvements: 'Dados de Produção\nSuporte ao Usuário',
    platform: 'Android',
  },
  {
    text: 'Aplicativo muito bom, porém poderiam atualizar mensalmente com os dados da qualidade do leite.',
    date: '30/03/24',
    rating: '5',
    improvements: '-',
    platform: 'IOS',
  },
]);
</script>

<style lang="scss" scoped></style>

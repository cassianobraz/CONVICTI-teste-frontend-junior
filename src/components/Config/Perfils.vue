<template>
  <div class="p-6 pr-11 bg-white rounded-lg w-[916px] h-[342px]">
    <div class="flex justify-between items-center">
      <h2 class="text-xl font-semibold mb-2">Perfils</h2>
      <img :src="imgPlus" alt="icon de editar">
    </div>
    <div class="border-t border-border-config"></div>
    <table class="w-full border-collapse">
      <thead>
        <tr class="border-b border-border-config text-left text-xs">
          <th class="text-font-text-title text-xs py-2">Nome</th>
          <th class="px-2 py-2 text-font-text-title text-xs">Quantidade De Usuarios</th>
          <th class="px-2 py-2 text-font-text-title text-xs">Permissões</th>
          <th class="px-2 py-2 text-font-text-title text-xs"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="2" class="h-2"></td>
        </tr>
        <tr v-for="(perfil, index) in perfis" :key="index"
          :class="index % 2 === 0 ? 'bg-font-line h-[26px]' : 'bg-white h-[40px]'">
          <td class="h-[22px] px-2 rounded-l">
            <p class="text-sm font-medium">{{ perfil.nome }}</p>
          </td>
          <td class="px-2 h-[22px]">
            <p class="text-sm">{{ perfil.quantidadeUsuarios }}</p>
          </td>
          <td class="h-[22px] px-2 rounded-r">
            <span v-for="(permissao, idx) in perfil.permissoes" :key="idx" :class="getPermissaoClass(permissao)"
              class="text-xs font-medium rounded-4xl h-[22px] items-center justify-center">
              {{ permissao }}
            </span>
          </td>
          <td class="w-[14px] h-[14px] bg-white">
            <img :src="imgEdit" alt="icon de editar" class="mr-5 ml-2">
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import imgPlus from '@/assets/square-plus.svg';
import imgEdit from '@/assets/edit.svg';

function getPermissaoClass(permissao) {
  switch (permissao) {
    case 'Tudo':
      return 'flex items-center justify-center bg-circle-config text-xs font-medium w-[48px] h-[22px] rounded-4xl';
    case 'Downloads':
      return 'inline-block bg-circle-config text-xs font-medium mr-2 px-2 py-0.5 rounded-4xl h-[22px]';
    case 'Avaliações':
      return 'inline-block bg-circle-config text-xs font-medium mr-2 px-2 py-0.5 rounded-4xl h-[22px]';
    case 'Erros':
      return 'inline-block bg-circle-config text-xs font-medium mr-2 px-2.5 py-0.5 rounded-4xl h-[22px]';
    case 'Novas Funcionalidades':
      return 'inline-block bg-circle-config text-xs font-medium mr-2 h-[22px] px-2.5 py-0.5 rounded-4xl';
    case 'Nenhuma':
      return 'inline-block bg-circle-config text-xs font-medium mr-2 px-2 py-0.5 rounded-4xl h-[22px]';
    default:
      return 'bg-circle-config w-[48px]';
  }
}

const perfis = ref([
  {
    nome: 'Admin',
    quantidadeUsuarios: 1,
    permissoes: [ 'Tudo' ]
  },
  {
    nome: 'Desenvolvedor',
    quantidadeUsuarios: 2,
    permissoes: [ 'Downloads', 'Avaliações', 'Erros', 'Novas Funcionalidades' ]
  },
  {
    nome: 'Recursos Humanos',
    quantidadeUsuarios: 1,
    permissoes: [ 'Nenhuma' ]
  }
]);
</script>
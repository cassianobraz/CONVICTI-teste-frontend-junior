<template>
  <div class="p-6 pr-11 bg-white rounded-lg w-[916px] h-[342px]">
    <div class="flex justify-between items-center">
      <h2 class="text-xl font-semibold mb-2">Usuários</h2>
      <img :src="imgPlus" alt="icon de editar">
    </div>
    <div class="border-t border-border-config"></div>
    <table class="w-full border-collapse">
      <thead>
        <tr class="border-b border-border-config text-left text-xs">
          <th class="py-2 text-font-text-title text-xs text-left w-[163px]">Nome</th>
          <th class="py-2 text-font-text-title text-xs text-left w-[270px]">Email</th>
          <th class="py-2 text-font-text-title text-xs text-left w-[220px]">Perfil</th>
          <th class="py-2 text-font-text-title text-xs text-left w-[80px] ">Status</th>
          <th class="py-2 text-font-text-title text-xs w-[40px] text-right"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="2" class="h-2"></td>
        </tr>
        <tr v-for="(usuario, index) in usuarios" :key="index"
          :class="index % 2 === 0 ? 'bg-font-line h-[26px]' : 'bg-white h-[40px]'">
          <td class="px-2 h-[26px] rounded-l">
            <p class="text-sm font-medium">{{ usuario.nome }}</p>
          </td>
          <td class="h-[26px]">
            <p class="text-sm">{{ usuario.email }}</p>
          </td>
          <td class="h-[26px]">
            <span class="text-xs font-medium">{{ usuario.perfil }}</span>
          </td>
          <td class="h-[26px] text-center rounded-r">
            <span
              class="bg-border-ativo text-xs font-medium w-[84px] h-[20px] flex items-center justify-center uppercase text-font-ativo rounded">
              {{ usuario.status }}
            </span>
          </td>
          <td class="w-[14px] h-[14px] bg-white">
            <img :src="imgEdit" alt="icon de editar" class="ml-6">
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

// Array de objetos para usuários
const usuarios = ref([
  {
    nome: 'Junior Luiz',
    email: 'junior@convicti.com.br',
    perfil: 'Admin',
    status: 'Ativo'
  },
  {
    nome: 'Joao Lucas',
    email: 'joao.lucas@convicti.com.br',
    perfil: 'Desenvolvedor',
    status: 'Ativo'
  },
  {
    nome: 'Cíntia Lopes',
    email: 'cintia.lopes@convicti.com.br',
    perfil: 'Recursos Humanos',
    status: 'Ativo'
  }
]);
</script>
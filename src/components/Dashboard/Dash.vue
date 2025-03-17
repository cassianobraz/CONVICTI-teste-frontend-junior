<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow-md p-4 flex flex-col">
      <div class="flex flex-col items-center mt-5">
        <img :src="imgGroup" alt="Logo" class="w-20 h-14 mb-2" />
        <h1 class="mt-5 font-semibold text-font-text">PAINEL DE DADOS</h1>
      </div>
      <nav class="mt-3">
        <button class="w-52 items-center gap-2 flex text-left py-2.5 px-4 text-font-text bg-hover-dash rounded-md text-[14px] cursor-pointer">
          <RiDashboardHorizontalLine class="w-5 h-5" />
          Dashboard
        </button>
      </nav>
      <div class="mt-auto">
        <button class="w-full text-left px-4 py-2 text-gray-700">Configurações</button>
        <button class="w-full text-left px-4 py-2 text-gray-700">Sair</button>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 p-6">
      <div class="p-6">
        <h2 class="text-xl font-semibold mb-4">Estatísticas</h2>
        <div class="grid grid-cols-2 gap-4 bg-white shadow-md rounded-lg">
          <div>
            <p class="text-gray-600">Downloads</p>
            <p class="text-3xl font-bold">330</p>
          </div>
          <div>
            <p class="text-gray-600">Avaliações</p>
            <p class="text-3xl font-bold">4.2★</p>
          </div>
        </div>

        <h3 class="mt-6 text-lg font-semibold">Feedbacks</h3>
        <div class="bg-gray-100 p-4 rounded-md mt-2">
          <p class="text-gray-700">"Os usuários podem atualizar manualmente os dados de qualidade."</p>
          <p class="text-sm text-gray-500">03/04/24</p>
        </div>
        <div class="bg-gray-100 p-4 rounded-md mt-2">
          <p class="text-gray-700">"Os usuários podem editar mais rapidamente as coletas."</p>
          <p class="text-sm text-gray-500">30/03/24</p>
        </div>

        <h3 class="mt-6 text-lg font-semibold">Novas Funcionalidades</h3>
        <ul class="list-disc pl-6 mt-2 text-gray-700">
          <li>Veículo Em Rota</li>
          <li>Avaliação De Coleta</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import imgGroup from '@/assets/Group.png';
import { RiDashboardHorizontalLine } from "vue-icons-plus/ri";
</script>

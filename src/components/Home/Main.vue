<template>
  <div class="relative flex h-screen items-center justify-center bg-gray-100">
    <div>
      <img :src="imgGroup" alt="Logo" class="w-20 h-14" />
      <img :src="imgMark" alt="Logo" class="w-24 h-7" />
    </div>

    <div class="absolute inset-0 flex justify-center items-center -z-10">
    <!-- Círculos no fundo -->
      <div class="w-96 h-96 bg-blue-200 rounded-full absolute opacity-30"></div>
      <div class="w-72 h-72 bg-blue-300 rounded-full absolute opacity-20"></div>
    </div>

    <!-- Formulário de Login -->
    <div class="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden relative">
      <div class="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <h2 class="text-xl font-semibold text-center mb-4">Bem-vindo de Volta</h2>
        <p class="text-gray-600 text-center mb-6">Insira suas credenciais para acessar a plataforma</p>
        <form @submit.prevent="login">
          <div class="mb-4">
            <input type="email" placeholder="Seu e-mail"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div class="mb-6">
            <input type="password" placeholder="Sua senha"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button type="submit"
            class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">Entrar</button>
        </form>
      </div>
      <div class="w-1/2 hidden md:block">
        <img :src="imgDash" alt="Dashboard" class="w-full h-full object-cover" />
      </div>
        <!-- Adicionando os círculos azuis ao redor do dashboard -->
        <div class="absolute top-0 left-0 w-full h-full">
          <svg viewBox="0 0 100 100" class="relative top-0 left-0 w-full h-full">
            <circle cx="130" cy="50" r="65" stroke="#5452FC" stroke-width="0.5" fill="transparent" />
            <circle cx="130" cy="50" r="55" stroke="#5452FC" stroke-width="0.5" fill="transparent" />
          </svg>
        </div>
      </div>
    </div>

</template>

<script setup>
import imgGroup from '@/assets/Group.png';
import imgMark from '@/assets/CONVICTI.svg';
import imgDash from '@/assets/Dashboard.svg';

const login = () => {
  // Lógica de login aqui
};
</script>
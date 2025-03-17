<template>
  <div class="-ml-4 mt-36 flex flex-col justify-center">
    <h2 class="text-2xl font-semibold text-start">Bem-vindo de Volta</h2>
    <p class="text-start mb-6 text-xs">Insira sua credenciais para acessar a plataforma</p>
    <form @submit.prevent="login">
      <div class="mb-4">
        <input type="email" placeholder="Seu e-mail" required
          class="w-72 px-4 py-2 border-gray-300 border rounded-md focus:outline-none text-gray-500" />
      </div>
      <div class="mb-6">
        <input type="password" placeholder="Sua senha" required
          class="w-72 px-4 py-2 border-gray-300 border rounded-md focus:outline-none text-gray-500" />
      </div>
      <button type="submit"
        class="w-full bg-purple-circle text-white py-2 rounded-md hover:bg-purple-circle2 transition cursor-pointer">Entrar</button>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const login = () => {
  router.push('/dashboard');
};
</script>
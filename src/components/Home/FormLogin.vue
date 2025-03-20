<template>
  <Loading v-if="isLoading" :active="isLoading" :is-full-page="true" />
  <div class="-ml-4 mt-36 flex flex-col justify-center">
    <h2 class="text-2xl font-semibold text-start">Bem-vindo de Volta</h2>
    <p class="text-start mb-6 text-xs">
      Insira suas credenciais para acessar a plataforma
    </p>

    <form @submit.prevent="login">
      <!-- Campo de E-mail -->
      <div class="mb-4">
        <input v-model="email" type="email" placeholder="Seu e-mail" required
          class="w-72 px-4 py-2 border-gray-300 border rounded-md focus:outline-none text-gray-500"
          :class="{ 'border-red-500': errorMessage }" />
      </div>

      <!-- Campo de Senha -->
      <div class="mb-6">
        <input v-model="password" type="password" placeholder="Sua senha" required
          class="w-72 px-4 py-2 border-gray-300 border rounded-md focus:outline-none text-gray-500"
          :class="{ 'border-red-500': errorMessage }" />
      </div>

      <!-- Mensagem de Erro -->
      <p v-if="errorMessage" class="text-red-500 text-sm mb-4">
        {{ errorMessage }}
      </p>

      <!-- Botão de Login -->
      <button type="submit" :disabled="isLoading"
        class="w-full bg-purple-circle text-white py-2 rounded-md transition cursor-pointer"
        :class="{ 'opacity-50 cursor-not-allowed': isLoading }">
        Entrar
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { useRouter } from 'vue-router';
import { createTokenOauth, getUser } from '@/api/userService';

const router = useRouter();
const email = ref('');
const password = ref('');
const isLoading = ref(false);
const errorMessage = ref('');

const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

const login = async () => {
  isLoading.value = true;
  errorMessage.value = ''; 

  try {
    const userData = {
      grant_type: 'password',
      client_id: clientId,
      client_secret: clientSecret,
      username: email.value,
      password: password.value,
    };

    const tokenResponse = await createTokenOauth(userData);
    localStorage.setItem('authToken', tokenResponse.access_token);

    const userResponse = await getUser(tokenResponse.access_token);
    localStorage.setItem('user', JSON.stringify(userResponse));

    router.push('/dashboard');
  } catch (error) {
    console.error('Erro durante o login:', error);
    errorMessage.value = 'Falha ao fazer login. Verifique suas credenciais.';
    clearInputs(); 
  } finally {
    isLoading.value = false;
  }
};

const clearInputs = () => {
  email.value = '';
  password.value = '';
};
</script>
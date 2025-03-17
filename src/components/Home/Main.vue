<template>
  <div class="w-6xl h-[700px] mt-5 ml-5 border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden">
    <!-- Imagens no Canto Superior Esquerdo -->
    <div class="flex">
      <div class="flex flex-col items-center my-6 ml-6">
        <img :src="imgGroup" alt="Logo" class="w-20 h-14 mb-2" />
        <img :src="imgMark" alt="Logo" class="w-24 h-7" />
      </div>

      <!-- Formulário de Login -->
      <FormLogin />

      <div class="ml-36 h-full relative">
        <img :src="imgDash" alt="Dashboard" class="mt-10 h-[38rem] w-[40rem]" />

        <!-- Primeiro círculo com clip-path -->
        <div
          class="absolute -top-0 mt-1 -left-4 w-[42rem] h-[42rem] border border-purple-circle rounded-full -z-20">
        </div>

        <!-- Segundo círculo com clip-path -->
        <div
          class="absolute -top-0 -mt-15 -left-18 w-[49rem] h-[50rem] border border-purple-circle2 rounded-full -z-20">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import imgGroup from '@/assets/Group.png';
import imgMark from '@/assets/CONVICTI.svg';
import imgDash from '@/assets/Dashboard.svg';
import FormLogin from './FormLogin.vue';
</script>
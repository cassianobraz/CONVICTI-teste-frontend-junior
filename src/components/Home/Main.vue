<template>
  <div class="w-7xl h-[832px] overflow-hidden">
    <div class="flex">
      <div class="flex flex-col items-center my-6 ml-6">
        <img :src="imgGroup" alt="Logo" class="w-20 h-14 mb-2" />
        <img :src="imgMark" alt="Logo" class="w-24 h-7" />
      </div>

      <!-- Formulário de Login -->
      <div class="flex items-center justify-between h-full w-full">

        <FormLogin />
        <div class="ml-40 h-full relative mt-14">
          <img :src="imgDash" alt="Dashboard" class="mt-10 h-[644px] w-[992px]" />

          <!-- Primeiro círculo -->
          <div class="absolute -top-0 -mt-9 left-2 w-[755px] h-[755px] border border-purple-circle rounded-full -z-20">
          </div>

          <!-- Segundo círculo -->
          <div
            class="absolute -top-0 -mt-26 -left-13 w-[877px] h-[877px] border border-purple-circle2 rounded-full -z-20">
          </div>
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
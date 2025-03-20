<template>
  <div class="flex w-7xl h-[52rem] bg-gray-100">
    <!--! Sidebar -->
    <Layout />
    <div class="flex-1 -mt-26 ml-12 space-y-3">
      <h2 class="text-[32px] font-semibold mb-4">Estatísticas</h2>
      <div class="flex gap-6 rounded-md">
        <div class="w-[264px] h-[141px] bg-white p-5 rounded-md">
          <div class="flex justify-between">
            <p class="text-font-dash text-xl">Downloads</p>
            <img :src="imgCloud" alt="Logo" class="w-[26px] h-[26px]" />
          </div>
          <p class="text-[40px] font-bold">330</p>
          <div class="flex">
            <div class="flex gap-1 items-center">
              <img :src="imgAndroid" alt="Logo" class="w-4 h-4" />
              <p>240</p>
            </div>
            <div class="flex gap-1 items-center ml-6">
              <img :src="imgApple" alt="Logo" class="w-4 h-4" />
              <p>90</p>
            </div>
          </div>
        </div>
        <div class="w-[318px] h-[141px] bg-white p-5 rounded-md">
          <div class="flex justify-between">
            <p class="text-font-dash text-xl">Avaliações</p>
            <img :src="imgStar" alt="Logo" class="w-[26px] h-[26px]" />
          </div>
          <p class="text-[40px] font-bold">
            4.2<span class="text-[16px]">/5</span>
          </p>
          <div class="flex">
            <div class="flex gap-1 items-center">
              <img :src="imgAndroid" alt="Logo" class="w-4 h-4" />
              <p>5.0</p>
            </div>
            <div class="flex gap-1 items-center ml-6">
              <img :src="imgApple" alt="Logo" class="w-4 h-4" />
              <p>4.0</p>
            </div>
          </div>
        </div>
        <div class="w-[304px] h-[141px] bg-white p-5 rounded-md">
          <div class="flex justify-between">
            <p class="text-font-dash text-xl">Erros</p>
            <img :src="imgTimes" alt="Logo" class="w-6 h-6" />
          </div>
          <p class="text-[40px] font-bold">4</p>
          <div class="flex">
            <div class="flex gap-1 items-center">
              <img :src="imgAndroid" alt="Logo" class="w-4 h-4" />
              <p>2</p>
            </div>
            <div class="flex gap-1 items-center ml-6">
              <img :src="imgApple" alt="Logo" class="w-4 h-4" />
              <p>1</p>
            </div>
            <div class="flex items-center justify-end w-full text-font-taxa">
              <span>-5%</span>
              <BsArrowDown class="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
      <!-- feedbacks -->
      <Feadbacks />
      <!--! New Features -->
      <Features />
    </div>
  </div>
</template>

<script setup>
import Layout from '@/view/Layout.vue';
import imgCloud from '@/assets/cloud.svg';
import imgStar from '@/assets/star.svg';
import imgTimes from '@/assets/times-hexagon.svg';
import imgAndroid from '@/assets/android.svg';
import imgApple from '@/assets/apple.svg';
import Feadbacks from './Feadbacks.vue';
import Features from './Features.vue';
import { BsArrowDown } from 'vue-icons-plus/bs';
</script>

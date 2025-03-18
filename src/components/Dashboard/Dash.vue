<template>
  <div class="flex w-7xl h-[832px] bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-white p-4 flex flex-col items-center">
      <div class="flex flex-col items-center mt-5 mx-auto">
        <img :src="imgGroup" alt="Logo" class="w-20 h-14 mb-2" />
        <h1 class="mt-5 font-bold text-font-text text-[14px]">PAINEL DE DADOS</h1>
      </div>
      <nav class="mt-3">
        <button
          class="w-[198px] items-center gap-2 flex text-left h-[38px] text-font-text bg-hover-dash rounded-md text-[14px] cursor-pointer">
          <RiDashboardHorizontalLine class="w-5 h-5 ml-6" />
          Dashboard
        </button>
      </nav>
      <div class="mt-auto mb-20">
        <button
          class="w-[198px] items-center gap-2 flex text-left h-[38px] hover:bg-hover-dash rounded-md text-[14px] cursor-pointer">
          <GoGear class="w-5 h-5 ml-6" />
          Configurações
        </button>
        <button
          class="w-[198px] items-center gap-2 flex text-left h-[38px] hover:bg-hover-dash rounded-md text-[14px] cursor-pointer">
          <HiOutlineLogout class="w-5 h-5 ml-6" />
          Sair
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 mt-11 ml-10">
      <h2 class="text-[32px] font-semibold mb-4">Estatísticas</h2>
      <div class="flex gap-8 rounded-md">
        <div class="w-[264px] h-[141px] bg-white p-5">
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
        <div class="w-[318px] h-[141px] bg-white p-5">
          <div class="flex justify-between">
            <p class="text-font-dash text-xl">Avaliações</p>
            <img :src="imgStar" alt="Logo" class="w-[26px] h-[26px]" />
          </div>
          <p class="text-[40px] font-bold">4.2<span class="text-[16px]">/5</span></p>
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
        <div class="w-[304px] h-[141px] bg-white p-5">
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
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import imgGroup from '@/assets/Group.png';
import imgCloud from '@/assets/cloud.png';
import imgStar from '@/assets/star.png';
import imgTimes from '@/assets/times-hexagon.png';
import imgAndroid from '@/assets/android.png';
import imgApple from '@/assets/apple.png';
import { RiDashboardHorizontalLine } from "vue-icons-plus/ri";
import { GoGear } from "vue-icons-plus/go";
import { HiOutlineLogout } from "vue-icons-plus/hi";
</script>

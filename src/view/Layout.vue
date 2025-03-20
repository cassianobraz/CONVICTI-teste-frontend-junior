<template>
  <!-- Sidebar -->
  <aside class="w-[250px] h-full p-4 flex flex-col items-center bg-white">
    <div class="flex flex-col items-center mt-5 mx-auto">
      <img :src="imgGroup" alt="Logo" class="w-[84.62px] h-[54.58px] mb-2" />
      <h1 class="mt-5 font-semibold text-font-text text-[14px]">
        PAINEL DE DADOS
      </h1>
    </div>
    <nav class="mt-3">
      <a
        :class="[
          'w-[198px] items-center gap-2 flex text-left h-[38px] rounded-md text-[14px] cursor-pointer',
          isDashboard ? 'bg-hover-dash' : 'hover:bg-gray-300',
        ]"
        @click.prevent="dashboard"
      >
        <RiDashboardHorizontalLine class="w-5 h-5 ml-6 text-font-text-aside" />
        Dashboard
      </a>
    </nav>
    <div class="mt-auto mb-15">
      <a
        :class="[
          'w-[198px] items-center gap-2 flex text-left h-[38px] rounded-md text-[14px] cursor-pointer text-font-text-aside',
          isConfig ? 'bg-hover-dash' : 'hover:bg-hover-dash',
        ]"
        @click.prevent="config"
      >
        <GoGear class="w-5 h-5 ml-6 text-font-text-aside" />
        Configurações
      </a>
      <a
        class="w-[198px] items-center gap-2 flex text-left h-[38px] hover:bg-hover-dash rounded-md text-[14px] cursor-pointer mt-2 -mb-8 text-font-text-aside"
        @click.prevent="logout"
      >
        <HiOutlineLogout class="w-5 h-5 ml-6 text-font-text-aside" />
        Sair
      </a>
    </div>
  </aside>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import imgGroup from '@/assets/Group.svg';
import { RiDashboardHorizontalLine } from 'vue-icons-plus/ri';
import { GoGear } from 'vue-icons-plus/go';
import { HiOutlineLogout } from 'vue-icons-plus/hi';

const router = useRouter();
const route = useRoute();
const isDashboard = route.path === '/dashboard';
const isConfig = route.path === '/config';

function dashboard() {
  router.push('/dashboard');
}
function config() {
  router.push('/config');
}
function logout() {
  router.push('/');
}
</script>

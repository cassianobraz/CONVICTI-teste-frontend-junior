<template>
  <div class="flex w-7xl h-[832px] bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-[250px] h-full bg-white p-4 flex flex-col items-center">
      <div class="flex flex-col items-center mt-5 mx-auto">
        <img :src="imgGroup" alt="Logo" class="w-[84.62px] h-[54.58px] mb-2" />
        <h1 class="mt-5 font-semibold text-font-text text-[14px]">PAINEL DE DADOS</h1>
      </div>
      <nav class="mt-3">
        <a
          class="w-[198px] items-center gap-2 flex text-left h-[38px] text-font-text-aside bg-hover-dash rounded-md text-[14px] cursor-pointer">
          <RiDashboardHorizontalLine class="w-5 h-5 ml-6 text-font-text-aside" />
          Dashboard
        </a>
      </nav>
      <div class="mt-auto mb-20">
        <a class="w-[198px] items-center gap-2 flex text-left h-[38px] hover:bg-hover-dash rounded-md text-[14px] cursor-pointer text-font-text-aside"
          @click.prevent="config">
          <GoGear class="w-5 h-5 ml-6 text-font-text-aside" />
          Configurações
        </a>
        <a class="w-[198px] items-center gap-2 flex text-left h-[38px] hover:bg-hover-dash rounded-md text-[14px] cursor-pointer mt-4 -mb-8 text-font-text-aside"
          @click.prevent="logout">
          <HiOutlineLogout class="w-5 h-5 ml-6 text-font-text-aside" />
          Sair
        </a>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 mt-10 ml-12 space-y-3">
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
          </div>
        </div>
      </div>
      <!--! feedbacks -->
      <div class="p-6 bg-white rounded-lg w-[930px] h-[268px]">
        <h2 class="text-xl font-semibold mb-2">Feedbacks</h2>
        <table class="w-full">
          <thead>
            <tr class="text-left text-font-table text-sm">
              <th>Avaliação</th>
              <th class="px-5">Data</th>
              <th class="">Avaliação</th>
              <th class="">Melhorias</th>
              <th class="">Plataforma</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(feedback, index) in feedbacks" :key="index" class="mb-5">
              <td class="text-font-text-dash text-[10px] w-[408px] h-[41px] text-justify">
                {{ feedback.text }}
              </td>
              <td class="px-5 text-font-text-dash text-sm">{{ feedback.date }}</td>
              <td class="text-font-text-dash text-sm">{{ feedback.rating }}</td>
              <td class="text-font-text-dash text-sm whitespace-pre-line">{{ feedback.improvements }}
              </td>
              <td class="text-font-text-dash text-sm">{{ feedback.platform }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--! final -->
      <div class="px-6 py-4 bg-white rounded-lg w-[933px] h-[153px]">
        <h2 class="text-xl font-semibold mb-4">Novas Funcionalidades</h2>
        <div class="mr-8">
          <div class="flex justify-between text-font-dash text-xs -mt-1">
            <h3>Funcionalidade</h3>
            <h3>Taxa De Uso</h3>
          </div>
          <div class="space-y-2 mt-2">
            <div class="flex justify-between px-4 w-[876px] h-[27px]">
              <h3>Veículo em Rota</h3>
              <h3 class="text-font-taxa mr-3">92%</h3>
            </div>
            <div class="flex justify-between px-4 bg-font-line w-[876px] h-[27px]">
              <h3>Avaliação de coleta</h3>
              <h3 class="text-font-taxa mr-3">78%</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import imgGroup from '@/assets/Group.png';
import imgCloud from '@/assets/cloud.png';
import imgStar from '@/assets/star.png';
import imgTimes from '@/assets/times-hexagon.png';
import imgAndroid from '@/assets/android.png';
import imgApple from '@/assets/apple.png';
import { RiDashboardHorizontalLine } from "vue-icons-plus/ri";
import { GoGear } from "vue-icons-plus/go";
import { HiOutlineLogout } from "vue-icons-plus/hi";

const router = useRouter();

function config() {
  router.push('/Config');
}
function logout() {
  router.push('/');
}

const feedbacks = ref([
  {
    text: "Aplicativo muito bom, porém poderiam atualizar mensalmente com os dados da qualidade do leite. Quando vira o mês o aplicativo apaga os dados da produção dos meses anteriores, não sendo possível consultar os meses anteriores. Antes não tinha esse problema.",
    date: "01/04/24",
    rating: "4",
    improvements: "Dados de Produção   \n  Suporte ao Usuário",
    platform: "Android"
  },
  {
    text: "Aplicativo muito bom, porém poderiam atualizar mensalmente com os dados da qualidade do leite.",
    date: "30/03/24",
    rating: "5",
    improvements: "-",
    platform: "IOS"
  }
]);
</script>

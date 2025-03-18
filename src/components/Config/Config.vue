<template>
  <div class="flex w-7xl h-[832px] bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-[250px] h-full bg-white p-4 flex flex-col items-center">
      <div class="flex flex-col items-center mt-5 mx-auto">
        <img :src="imgGroup" alt="Logo" class="w-[84.62px] h-[54.58px] mb-2" />
        <h1 class="mt-5 font-semibold text-font-text text-[14px]">PAINEL DE DADOS</h1>
      </div>
      <nav class="mt-3">
        <a class="w-[198px] items-center gap-2 flex text-left h-[38px] rounded-md text-[14px] cursor-pointer hover:bg-hover-dash text-font-text-aside"
          @click.prevent="dashboard">
          <RiDashboardHorizontalLine class="w-5 h-5 ml-6 text-font-text-aside" />
          Dashboard
        </a>
      </nav>
      <div class="mt-auto mb-20">
        <a
          class="w-[198px] items-center gap-2 flex text-left h-[38px] rounded-md text-[14px] cursor-pointer bg-hover-dash">
          <GoGear class="w-5 h-5 ml-6" />
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
    <div class="flex-1 mt-5 ml-12 space-y-6">
      <h2 class="text-[32px] font-semibold mb-4">Configurações</h2>
      <!--! feedbacks -->
      <div class="p-6 bg-white rounded-lg w-[916px] h-[342px]">
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-semibold mb-2">Perfils</h2>
          <AiFillPlusSquare class="text-purple-circle rounded-md" />
        </div>
        <div class="border-t border-border-config"></div>
        <table class="w-full border-collapse">
          <thead>
            <tr class="border-b border-border-config  text-left text-xs text-font-text-title">
              <th class="py-2 text-font-text-title text-xs">Nome</th>
              <th class="px-2 py-2 text-font-text-title text-xs">Quantidade De Usuarios</th>
              <th class="px-2 py-2 text-font-text-title text-xs">Permissões</th>
            </tr>
          </thead>
          <tbody>
              <tr class="bg-font-line">
                <td class="py-2 px-2">
                <p class="text-sm font-medium text-gray-700">Admin</p>
              </td>
              <td class="py-2 px-2">
                <p class="text-sm text-gray-700">1</p>
              </td>
              <td class="py-2 px-2">
                <span
                  class="bg-circle-config text-xs font-medium mr-2 w-[48px] h-[22px] rounded-4xl items-center flex justify-center">Tudo</span>
              </td>
              <td class="w-[14px] h-[14px]">
                <img :src="imgEdit" alt="icon de editar">
              </td>
            </tr>
            <tr class="bg-white">
              <td class="py-2 px-2">
                <p class="text-sm font-medium text-gray-700">Desenvolvedor</p>
              </td>
              <td class="py-2 px-2">
                <p class="text-sm text-gray-700">2</p>
              </td>
              <td class="py-2 px-2">
                <span
                  class="inline-block bg-circle-config text-xs font-medium mr-2 px-2.5 py-0.5 rounded-4xl">Downloads</span>
                <span
                  class="inline-block bg-circle-config text-xs font-medium mr-2 px-2.5 py-0.5 rounded-4xl">Avaliações</span>
                <span
                  class="inline-block bg-circle-config text-xs font-medium mr-2 px-2.5 py-0.5 rounded-4xl">Erros</span>
                  <span class="inline-block bg-circle-config text-xs font-medium mr-2 px-2.5 py-0.5 rounded-4xl">Novas
                    Funcionalidades</span>
                  </td>
                  <td class="w-[14px] h-[14px]">
                    <img :src="imgEdit" alt="icon de editar" class="mr-5">
              </td>
            </tr>
            <tr class="bg-gray-100">
              <td class="py-2 px-2">
                <p class="text-sm font-medium text-gray-700">Recursos Humanos</p>
              </td>
              <td class="py-2 px-2">
                <p class="text-sm text-gray-700">1</p>
              </td>
              <td class="py-2 px-2">
                <span
                  class="flex w-[70px] items-center justify-center bg-circle-config text-xs font-medium mr-2 rounded-4xl h-[22px]">Nenhuma</span>
              </td>
              <td class="w-[14px] h-[14px]">
                <img :src="imgEdit" alt="icon de editar">
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--! final -->
      <div class="px-6 py-4 bg-white rounded-lg w-[916px] h-[342px]">
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
import { useRouter } from 'vue-router';
import imgGroup from '@/assets/Group.png';
import imgEdit from '@/assets/edit.png';
import { RiDashboardHorizontalLine } from "vue-icons-plus/ri";
import { GoGear } from "vue-icons-plus/go";
import { HiOutlineLogout } from "vue-icons-plus/hi";
import { AiFillPlusSquare } from "vue-icons-plus/ai";

const router = useRouter();

function dashboard() {
  router.push('/Dashboard');
}
function logout() {
  router.push('/');
}
</script>

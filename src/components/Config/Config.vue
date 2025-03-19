<template>
  <div class="flex w-7xl h-[832px] bg-gray-100">
    <!--! Sidebar -->
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
      <div class="mt-auto mb-15">
        <a class="w-[198px] items-center gap-2 flex text-left h-[38px] hover:bg-hover-dash rounded-md text-[14px] cursor-pointer text-font-text-aside"
          @click.prevent="config">
          <GoGear class="w-5 h-5 ml-6 text-font-text-aside" />
          Configurações
        </a>
        <a class="w-[198px] items-center gap-2 flex text-left h-[38px] hover:bg-hover-dash rounded-md text-[14px] cursor-pointer mt-2 -mb-8 text-font-text-aside"
          @click.prevent="logout">
          <HiOutlineLogout class="w-5 h-5 ml-6 text-font-text-aside" />
          Sair
        </a>
      </div>
    </aside>

    <div class="flex-1 mt-5 ml-12 space-y-6">
      <h2 class="text-[32px] font-semibold mb-4">Configurações</h2>
      <!--! Perfils -->
      <div class="p-6 bg-white rounded-lg w-[916px] h-[342px]">
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-semibold mb-2">Perfils</h2>
          <AiFillPlusSquare class="text-purple-circle rounded-md" />
        </div>
        <div class="border-t border-border-config"></div>
        <table class="w-full border-collapse">
          <thead>
            <tr class="border-b border-border-config text-left text-xs text-font-text-title">
              <th class="text-font-text-title text-xs">Nome</th>
              <th class="px-2 text-font-text-title text-xs">Quantidade De Usuarios</th>
              <th class="px-2 text-font-text-title text-xs">Permissões</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="2" class="h-2"></td>
            </tr>
            <tr class="bg-font-line h-[26px]">
              <td class="h-[22px] px-2">
                <p class="text-sm font-medium text-gray-700">Admin</p>
              </td>
              <td class="px-2 h-[22px]">
                <p class="text-sm text-gray-700">1</p>
              </td>
              <td class="h-[22px] px-2">
                <span
                  class="bg-circle-config text-xs font-medium mr-2 w-[48px] h-[22px] rounded-4xl items-center flex justify-center">Tudo</span>
              </td>
              <td class="w-[14px] h-[14px] bg-white">
                <img :src="imgEdit" alt="icon de editar" class="mr-5 ml-2">
              </td>
            </tr>
            <tr class="bg-white h-[40px]">
              <td class="h-[22px] px-2">
                <p class="text-sm font-medium text-gray-700">Desenvolvedor</p>
              </td>
              <td class="h-[22px] px-2">
                <p class="text-sm text-gray-700">2</p>
              </td>
              <td class="h-[22px] px-2">
                <span
                  class="inline-block bg-circle-config text-xs font-medium mr-2 px-2.5 py-0.5 rounded-4xl h-[22px]">Downloads</span>
                <span
                  class="inline-block bg-circle-config text-xs font-medium mr-2 px-2 py-0.5 rounded-4xl h-[22px]">Avaliações</span>
                <span
                  class="inline-block bg-circle-config text-xs font-medium mr-2 px-2.5 py-0.5 rounded-4xl h-[22px]">Erros</span>
                <span
                  class="inline-block bg-circle-config text-xs font-medium mr-2 h-[22px] px-2.5 py-0.5 rounded-4xl">Novas
                  Funcionalidades</span>
              </td>
              <td class="w-[14px] h-[14px] bg-white">
                <img :src="imgEdit" alt="icon de editar" class="mr-5 ml-2">
              </td>
            </tr>
            <tr class="bg-gray-100 h-[26px]">
              <td class="h-[22px] px-2">
                <p class="text-sm font-medium text-gray-700">Recursos Humanos</p>
              </td>
              <td class="h-[22px] px-2">
                <p class="text-sm text-gray-700">1</p>
              </td>
              <td class="h-[22px] px-2">
                <span
                  class="flex w-[70px] items-center justify-center bg-circle-config text-xs font-medium mr-2 rounded-4xl h-[22px]">Nenhuma</span>
              </td>
              <td class="w-[14px] h-[14px] bg-white">
                <img :src="imgEdit" alt="icon de editar" class="mr-5 ml-2">
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!--! Usuarios -->
      <div class="p-6 bg-white rounded-lg w-[916px] h-[342px]">
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-semibold mb-2">Usuários</h2>
          <AiFillPlusSquare class="text-purple-circle rounded-md" />
        </div>
        <div class="border-t border-border-config"></div>
        <table class="w-[880px] border-collapse">
          <thead class="w-full">
            <tr class="border-b border-border-config text-left text-xs text-font-text-title">
              <th class="py-2 text-font-text-title text-xs text-left w-[230px]">Nome</th>
              <th class="py-2 text-font-text-title text-xs text-left w-[270px]">Email</th>
              <th class="py-2 text-font-text-title text-xs text-left w-[210px]">Perfil</th>
              <th class="py-2 text-font-text-title text-xs text-left w-[90px]">Status</th>
              <th class="py-2 text-font-text-title text-xs w-[50px] text-right"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="5" class="h-2"></td>
            </tr>
            <tr class="bg-font-line">
              <td class="px-2 h-[26px]">
                <p class="text-sm font-medium text-gray-700">Junior Luiz</p>
              </td>
              <td class="h-[26px]">
                <p class="text-sm text-gray-700">junior@convicti.com.br</p>
              </td>
              <td class="h-[26px]">
                <span class="text-xs font-medium">Admin</span>
              </td>
              <td class="h-[26px] text-center">
                <span
                  class="bg-border-ativo text-xs font-medium w-[84px] h-[20px] flex items-center justify-center rounded-md uppercase text-font-ativo">
                  Ativo
                </span>
              </td>
              <td class="w-[14px] h-[14px] bg-white">
                <img :src="imgEdit" alt="icon de editar" class="ml-5">
              </td>
            </tr>
            <tr class="bg-white h-[40px]">
              <td class="px-2 h-[26px]">
                <p class="text-sm font-medium text-gray-700">joao Lucas</p>
              </td>
              <td class="h-[26px]">
                <p class="text-sm text-gray-700">joao.lucas@convicti.com.br</p>
              </td>
              <td class="h-[26px]">
                <span class="text-xs font-medium">Desenvolvedor</span>
              </td>
              <td class="h-[26px] text-center">
                <span
                  class="bg-border-ativo text-xs font-medium w-[84px] h-[20px] flex items-center justify-center rounded-md uppercase text-font-ativo">
                  Ativo
                </span>
              </td>
              <td class="w-[14px] h-[14px] bg-white">
                <img :src="imgEdit" alt="icon de editar" class="ml-5">
              </td>
            </tr>
            <tr class="bg-font-line">
              <td class="px-2 h-[26px]">
                <p class="text-sm font-medium text-gray-700">Cíntia Lopes</p>
              </td>
              <td class="h-[26px]">
                <p class="text-sm text-gray-700">cintia.lopes@convicti.com.br</p>
              </td>
              <td class="h-[26px]">
                <span class="text-xs font-medium">Recursos Humanos</span>
              </td>
              <td class="h-[26px] text-center">
                <span
                  class="bg-border-ativo text-xs font-medium w-[84px] h-[20px] flex items-center justify-center rounded-md uppercase text-font-ativo">
                  Ativo
                </span>
              </td>
              <td class="w-[14px] h-[14px] bg-white">
                <img :src="imgEdit" alt="icon de editar" class="ml-5">
              </td>
            </tr>
          </tbody>
        </table>
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

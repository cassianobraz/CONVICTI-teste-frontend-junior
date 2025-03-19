<template>
  <div class="flex w-7xl h-[52rem] bg-gray-100">
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
        <a class="w-[198px] items-center gap-2 flex text-left h-[38px] rounded-md text-[14px] cursor-pointer text-font-text-aside bg-hover-dash"
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
      <div class="p-6 pr-11 bg-white rounded-lg w-[916px] h-[342px]">
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-semibold mb-2">Perfils</h2>
          <img :src="imgPlus" alt="icon de editar">
        </div>
        <div class="border-t border-border-config"></div>
        <table class="w-full border-collapse">
          <thead>
            <tr class="border-b border-border-config text-left text-xs">
              <th class="text-font-text-title text-xs py-2">Nome</th>
              <th class="px-2 py-2 text-font-text-title text-xs">Quantidade De Usuarios</th>
              <th class="px-2 py-2 text-font-text-title text-xs">Permissões</th>
              <th class="px-2 py-2 text-font-text-title text-xs"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="2" class="h-2"></td>
            </tr>
            <tr v-for="(perfil, index) in perfis" :key="index"
              :class="index % 2 === 0 ? 'bg-font-line h-[26px]' : 'bg-white h-[40px]'">
              <td class="h-[22px] px-2 rounded-l">
                <p class="text-sm font-medium">{{ perfil.nome }}</p>
              </td>
              <td class="px-2 h-[22px]">
                <p class="text-sm">{{ perfil.quantidadeUsuarios }}</p>
              </td>
              <td class="h-[22px] px-2 rounded-r">
                <span v-for="(permissao, idx) in perfil.permissoes" :key="idx" :class="getPermissaoClass(permissao)"
                  class="text-xs font-medium rounded-4xl h-[22px] items-center justify-center">
                  {{ permissao }}
                </span>
              </td>
              <td class="w-[14px] h-[14px] bg-white">
                <img :src="imgEdit" alt="icon de editar" class="mr-5 ml-2">
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!--! Usuarios -->
      <div class="p-6 pr-11 bg-white rounded-lg w-[916px] h-[342px]">
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-semibold mb-2">Usuários</h2>
          <img :src="imgPlus" alt="icon de editar">
        </div>
        <div class="border-t border-border-config"></div>
        <table class="w-full border-collapse">
          <thead>
            <tr class="border-b border-border-config text-left text-xs">
              <th class="py-2 text-font-text-title text-xs text-left w-[163px]">Nome</th>
              <th class="py-2 text-font-text-title text-xs text-left w-[270px]">Email</th>
              <th class="py-2 text-font-text-title text-xs text-left w-[220px]">Perfil</th>
              <th class="py-2 text-font-text-title text-xs text-left w-[80px] ">Status</th>
              <th class="py-2 text-font-text-title text-xs w-[40px] text-right"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="2" class="h-2"></td>
            </tr>
            <tr v-for="(usuario, index) in usuarios" :key="index"
              :class="index % 2 === 0 ? 'bg-font-line h-[26px]' : 'bg-white h-[40px]'">
              <td class="px-2 h-[26px] rounded-l">
                <p class="text-sm font-medium">{{ usuario.nome }}</p>
              </td>
              <td class="h-[26px]">
                <p class="text-sm">{{ usuario.email }}</p>
              </td>
              <td class="h-[26px]">
                <span class="text-xs font-medium">{{ usuario.perfil }}</span>
              </td>
              <td class="h-[26px] text-center rounded-r">
                <span
                  class="bg-border-ativo text-xs font-medium w-[84px] h-[20px] flex items-center justify-center uppercase text-font-ativo rounded">
                  {{ usuario.status }}
                </span>
              </td>
              <td class="w-[14px] h-[14px] bg-white">
                <img :src="imgEdit" alt="icon de editar" class="ml-6">
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import imgGroup from '@/assets/Group.png';
import imgEdit from '@/assets/edit.svg';
import imgPlus from '@/assets/square-plus.svg';
import { RiDashboardHorizontalLine } from "vue-icons-plus/ri";
import { GoGear } from "vue-icons-plus/go";
import { HiOutlineLogout } from "vue-icons-plus/hi";

const router = useRouter();

function dashboard() {
  router.push('/Dashboard');
}
function logout() {
  router.push('/');
}

function getPermissaoClass(permissao) {
  switch (permissao) {
    case 'Tudo':
      return 'flex items-center justify-center bg-circle-config text-xs font-medium w-[48px] h-[22px] rounded-4xl';
    case 'Downloads':
      return 'inline-block bg-circle-config text-xs font-medium mr-2 px-2 py-0.5 rounded-4xl h-[22px]';
    case 'Avaliações':
      return 'inline-block bg-circle-config text-xs font-medium mr-2 px-2 py-0.5 rounded-4xl h-[22px]';
    case 'Erros':
      return 'inline-block bg-circle-config text-xs font-medium mr-2 px-2.5 py-0.5 rounded-4xl h-[22px]';
    case 'Novas Funcionalidades':
      return 'inline-block bg-circle-config text-xs font-medium mr-2 h-[22px] px-2.5 py-0.5 rounded-4xl';
    case 'Nenhuma':
      return 'inline-block bg-circle-config text-xs font-medium mr-2 px-2 py-0.5 rounded-4xl h-[22px]';
    default:
      return 'bg-circle-config w-[48px]';
  }
}

// Array de objetos para perfis
const perfis = ref([
  {
    nome: 'Admin',
    quantidadeUsuarios: 1,
    permissoes: [ 'Tudo' ]
  },
  {
    nome: 'Desenvolvedor',
    quantidadeUsuarios: 2,
    permissoes: [ 'Downloads', 'Avaliações', 'Erros', 'Novas Funcionalidades' ]
  },
  {
    nome: 'Recursos Humanos',
    quantidadeUsuarios: 1,
    permissoes: [ 'Nenhuma' ]
  }
]);

// Array de objetos para usuários
const usuarios = ref([
  {
    nome: 'Junior Luiz',
    email: 'junior@convicti.com.br',
    perfil: 'Admin',
    status: 'Ativo'
  },
  {
    nome: 'Joao Lucas',
    email: 'joao.lucas@convicti.com.br',
    perfil: 'Desenvolvedor',
    status: 'Ativo'
  },
  {
    nome: 'Cíntia Lopes',
    email: 'cintia.lopes@convicti.com.br',
    perfil: 'Recursos Humanos',
    status: 'Ativo'
  }
]);
</script>
<template>
  <div class="p-6 pr-11 bg-white rounded-lg w-[916px] h-[342px]">
    <div class="flex justify-between items-center">
      <h2 class="text-xl font-semibold mb-2">Perfils</h2>
      <a class="cursor-pointer hover:bg-purple-circle2" @click="showModal = true"><img :src="imgPlus"
          alt="icon de editar"></a>
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

    <!-- Modal Novo Perfil -->
    <div v-if="showModal" class="fixed flex items-center justify-center z-50 w-[506px] h-[412px]">
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-xl font-semibold mb-2">Novo Perfil</h2>
        <input v-model="newPerfilName" type="text" placeholder="Novo Perfil"
          class="w-full border border-gray-300 rounded-md px-3 py-2 mb-4" />
        <div class="space-y-2">
          <div class="flex justify-between items-center">
            <span>Dashboard</span>
            <label class="switch">
              <input type="checkbox" v-model="permissions.dashboard">
              <span class="slider round"></span>
            </label>
          </div>
          <div class="flex justify-between items-center">
            <span>Downloads</span>
            <label class="switch">
              <input type="checkbox" v-model="permissions.downloads">
              <span class="slider round"></span>
            </label>
          </div>
          <div class="flex justify-between items-center">
            <span>Avaliações</span>
            <label class="switch">
              <input type="checkbox" v-model="permissions.avaliacoes">
              <span class="slider round"></span>
            </label>
          </div>
          <div class="flex justify-between items-center">
            <span>Erros</span>
            <label class="switch">
              <input type="checkbox" v-model="permissions.erros">
              <span class="slider round"></span>
            </label>
          </div>
          <div class="flex justify-between items-center">
            <span>Feedbacks</span>
            <label class="switch">
              <input type="checkbox" v-model="permissions.feedbacks">
              <span class="slider round"></span>
            </label>
          </div>
          <div class="flex justify-between items-center">
            <span>Novas Funcionalidades</span>
            <label class="switch">
              <input type="checkbox" v-model="permissions.novasFuncionalidades">
              <span class="slider round"></span>
            </label>
          </div>
        </div>
        <div class="flex justify-between mt-4">
          <button @click="closeModal" class="bg-gray-300 text-gray-800 h-10 w-[11rem] rounded-md">Voltar</button>
          <button @click="addNewPerfil" class="bg-purple-circle text-white h-10 w-[15rem] rounded-md">Adicionar</button>
        </div>
      </div>
    </div>

    <div v-if="showModal" class="fixed inset-0 bg-black opacity-50 z-40" @click="closeModal"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import imgPlus from '@/assets/square-plus.svg';
import imgEdit from '@/assets/edit.svg';

const showModal = ref(false);
const newPerfilName = ref('');
const permissions = ref({
  dashboard: false,
  downloads: false,
  avaliacoes: false,
  erros: false,
  feedbacks: false,
  novasFuncionalidades: false,
});

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

function closeModal() {
  showModal.value = false;
  newPerfilName.value = '';
  permissions.value = {
    dashboard: false,
    downloads: false,
    avaliacoes: false,
    erros: false,
    feedbacks: false,
    novasFuncionalidades: false,
  };
}

function addNewPerfil() {
  const newPerfil = {
    nome: newPerfilName.value,
    quantidadeUsuarios: 0,
    permissoes: []
  };

  if (permissions.value.dashboard) newPerfil.permissoes.push('Dashboard');
  if (permissions.value.downloads) newPerfil.permissoes.push('Downloads');
  if (permissions.value.avaliacoes) newPerfil.permissoes.push('Avaliações');
  if (permissions.value.erros) newPerfil.permissoes.push('Erros');
  if (permissions.value.feedbacks) newPerfil.permissoes.push('Feedbacks');
  if (permissions.value.novasFuncionalidades) newPerfil.permissoes.push('Novas Funcionalidades');

  perfis.value.push(newPerfil);
  closeModal();
}
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 22px;
  height: 14px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  left: 12px;
  bottom: 3px;
  background-color: black;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked+.slider {
  background-color: #2196F3;
}

input:focus+.slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked+.slider:before {
  -webkit-transform: translateX(-10px);
  -ms-transform: translateX(-10px);
  transform: translateX(-10px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
<template>
  <div class="p-6 pr-11 bg-white rounded-lg w-[916px] h-[342px]">
    <div class="flex justify-between items-center">
      <h2 class="text-xl font-semibold mb-2">Perfils</h2>
      <a class="cursor-pointer hover:bg-purple-circle2" @click="openModalForAdd"><img :src="imgPlus"
          alt="icon de adicionar" /></a>
    </div>
    <div class="border-t border-border-config"></div>
    <table class="w-full border-collapse">
      <thead>
        <tr class="border-b border-border-config text-left text-xs">
          <th class="text-font-text-title text-xs py-2">Nome</th>
          <th class="px-2 py-2 text-font-text-title text-xs">
            Quantidade De Usuarios
          </th>
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
            <img :src="imgEdit" alt="icon de editar" class="mr-5 ml-2 cursor-pointer"
              @click="openModalForEdit(perfil)" />
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal -->
    <div v-if="showModal" class="absolute insert-0 flex items-center justify-center z-50 ml-20 -mt-[2.85rem]">
      <div class="bg-white rounded-lg shadow-lg px-8 w-[506px] h-[412px]">
        <h2 class="text-xl font-semibold py-4 mt-4">{{ isEditMode ? 'Editar Perfil' : 'Novo Perfil' }}</h2>
        <input v-model="currentPerfil.nome" type="text" placeholder="Nome do Perfil"
          class="w-[442px] border border-gray-300 rounded-md px-3 py-2 mb-4" />
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-xs text-font-dash">Dashboard</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-[14px]">Downloads</span>
            <label class="switch">
              <input type="checkbox" v-model="currentPerfil.permissoes.downloads" />
              <span class="slider round"></span>
            </label>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-[14px]">Avaliações</span>
            <label class="switch">
              <input type="checkbox" v-model="currentPerfil.permissoes.avaliacoes" />
              <span class="slider round"></span>
            </label>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-[14px]">Erros</span>
            <label class="switch">
              <input type="checkbox" v-model="currentPerfil.permissoes.erros" />
              <span class="slider round"></span>
            </label>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-[14px]">Feedbacks</span>
            <label class="switch">
              <input type="checkbox" v-model="currentPerfil.permissoes.feedbacks" />
              <span class="slider round"></span>
            </label>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-[14px]">Novas Funcionalidades</span>
            <label class="switch">
              <input type="checkbox" v-model="currentPerfil.permissoes.novasFuncionalidades" />
              <span class="slider round"></span>
            </label>
          </div>
        </div>
        <div class="flex justify-between mt-8 gap-2">
          <button @click="closeModal"
            class="bg-button-back text-text-button-back h-10 w-[173px] rounded-md cursor-pointer">
            Voltar
          </button>
          <button @click="saveChanges"
            class="bg-button-add text-text-button-add h-10 w-[259px] rounded-md cursor-pointer">
            {{ isEditMode ? 'Salvar Alterações' : 'Adicionar' }}
          </button>
        </div>
      </div>
    </div>

    <div v-if="showModal" class="fixed inset-0 bg-black opacity-50 z-40" @click="closeModal"></div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import imgPlus from '@/assets/square-plus.svg';
import imgEdit from '@/assets/edit.svg';

const showModal = ref(false);
const isEditMode = ref(false);

// Objeto com todas as chaves de permissões possíveis
const allPermissions = {
  tudo: 'Tudo',
  downloads: 'Downloads',
  avaliacoes: 'Avaliações',
  erros: 'Erros',
  feedbacks: 'Feedbacks',
  novasFuncionalidades: 'Novas Funcionalidades',
};

const currentPerfil = ref({
  nome: '',
  permissoes: {
    tudo: false,
    downloads: false,
    avaliacoes: false,
    erros: false,
    feedbacks: false,
    novasFuncionalidades: false,
  },
});

const perfis = ref([
  { nome: 'Admin', quantidadeUsuarios: 1, permissoes: [ 'Tudo' ] },
  { nome: 'Desenvolvedor', quantidadeUsuarios: 2, permissoes: [ 'Downloads', 'Avaliações', 'Erros', 'Novas Funcionalidades' ] },
  { nome: 'Recursos Humanos', quantidadeUsuarios: 1, permissoes: [ 'Nenhuma' ] },
]);

function getPermissaoClass(permissao) {
  return permissao === 'Tudo'
    ? 'flex items-center justify-center bg-circle-config text-xs font-medium w-[48px] h-[22px] rounded-4xl'
    : 'inline-block bg-circle-config text-xs font-medium mr-2 px-2 py-0.5 rounded-4xl h-[22px]';
}

function openModalForAdd() {
  isEditMode.value = false;
  currentPerfil.value = {
    nome: '',
    permissoes: {
      tudo: false,
      downloads: false,
      avaliacoes: false,
      erros: false,
      feedbacks: false,
      novasFuncionalidades: false,
    },
  };
  showModal.value = true;
}

function openModalForEdit(perfil) {
  isEditMode.value = true;

  const permissoes = {
    tudo: perfil.permissoes.includes('Tudo'),
    downloads: perfil.permissoes.includes('Downloads'),
    avaliacoes: perfil.permissoes.includes('Avaliações'),
    erros: perfil.permissoes.includes('Erros'),
    feedbacks: perfil.permissoes.includes('Feedbacks'),
    novasFuncionalidades: perfil.permissoes.includes('Novas Funcionalidades'),
  };

  if (permissoes.tudo) {
    Object.keys(permissoes).forEach((key) => {
      permissoes[ key ] = true;
    });
  }

  currentPerfil.value = {
    ...perfil,
    permissoes,
  };
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}

function saveChanges() {
  const permissoesKeys = Object.keys(currentPerfil.value.permissoes).filter((key) => key !== 'tudo');
  const allChecked = permissoesKeys.every((key) => currentPerfil.value.permissoes[ key ]);

  if (allChecked) {
    currentPerfil.value.permissoes = { tudo: true };
  }

  const permissoesFinal = currentPerfil.value.permissoes.tudo
    ? [ 'Tudo' ]
    : permissoesKeys.filter((key) => currentPerfil.value.permissoes[ key ]).map((key) => allPermissions[ key ]);

  if (isEditMode.value) {
    const index = perfis.value.findIndex((p) => p.nome === currentPerfil.value.nome);
    if (index !== -1) {
      perfis.value[ index ] = { ...currentPerfil.value, permissoes: permissoesFinal };
    }
  } else {
    perfis.value.push({ ...currentPerfil.value, permissoes: permissoesFinal });
  }

  closeModal();
}

watch(
  () => currentPerfil.value.permissoes,
  (newPermissoes) => {
    const permissoesKeys = Object.keys(newPermissoes).filter((key) => key !== 'tudo');
    currentPerfil.value.permissoes.tudo = permissoesKeys.every((key) => newPermissoes[ key ]);
  },
  { deep: true }
);

watch(
  () => currentPerfil.value.permissoes.tudo,
  (newValue) => {
    Object.keys(currentPerfil.value.permissoes).forEach((key) => {
      if (key !== 'tudo') currentPerfil.value.permissoes[ key ] = newValue;
    });
  }
);
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
  background-color: transparent;
  border: 2px solid black;
  border-radius: 34px;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 8px;
  width: 8px;
  left: 0;
  top: 50%;
  transform: translate(20%, -50%);
  border: 2px solid black;
  border-radius: 50%;
  background-color: transparent;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked+.slider:before {
  transform: translateX(10px) translate(-20%, -50%);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>

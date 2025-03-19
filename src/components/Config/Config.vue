<template>
  <div class="flex w-7xl h-[52rem] bg-gray-100">
    <!--! Sidebar -->
    <Layout />

    <div class="flex-1 mt-5 ml-12 space-y-6">
      <h2 class="text-[32px] font-semibold mb-4">Configurações</h2>
      <!--! Perfils -->
      <Perfils />

      <!--! Usuarios -->
      <Usuario />

    </div>
  </div>
</template>

<script setup>
import Usuario from './Usuarios.vue';
import Perfils from './Perfils.vue';
import Layout from '../../view/Layout.vue';
</script>
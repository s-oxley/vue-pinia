<script setup lang="ts">
import TopMenu from '@/modules/commons/components/TopMenu.vue';
import SideMenu from '../components/SideMenu.vue';
</script>

<template>
  <div class="flex flex-col">
    <!-- Header Menu -->
    <top-menu />
    <main class="flex flex-1 flex-row">
      <!-- Side Menu -->
      <side-menu />
      <!-- RouterView -->
      <router-view class="flex-1 p-4"></router-view>
    </main>
  </div>
</template>

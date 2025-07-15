<template>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Nombre</th>
          <th>Trabajo</th>
          <th>Color favorito</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr>
          <th>1</th>
          <td>Santiago Oxley Heimen</td>
          <td>Product Owner</td>
          <td>Blue</td>
        </tr>
        <!-- row 2 -->
        <tr class="hover:bg-base-300">
          <th>2</th>
          <td>Javier Molina</td>
          <td>Technical Lead</td>
          <td>Purple</td>
        </tr>
        <!-- row 3 -->
        <tr>
          <th>3</th>
          <td>Brice Swyre</td>
          <td>Account Manager</td>
          <td>Red</td>
        </tr>
        <!-- row 4 -->
        <tr class="hover:bg-base-300">
          <th>4</th>
          <td>Paco Syner</td>
          <td>Developer</td>
          <td>Orange</td>
        </tr>
      </tbody>
    </table>
    <FabButton position="bottom-right" @click="modalOpen = true">
      <AddFolderIcon />
    </FabButton>
    <InputModal
      :open="modalOpen"
      @close="
        () => {
          console.log('close modal');
          modalOpen = false;
        }
      "
      @submit="
        (event) => {
          console.log(event);
          modalOpen = false;
        }
      "
    />
  </div>
</template>

<script setup lang="ts">
import FabButton from '@/modules/commons/components/FabButton.vue';
import InputModal from '@/modules/commons/components/InputModal.vue';
import AddFolderIcon from '@/modules/commons/icons/AddFolderIcon.vue';

import { ref } from 'vue';

const modalOpen = ref(false);
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>Version</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(project, index) in projectStore.getProjects" :key="index">
          <th>{{ project.version }}</th>
          <td>{{ project.name }}</td>
          <td>{{ project.description }}</td>
          <td>
            <progress class="progress progress-secondary w-56" value="2" max="100"></progress>
          </td>
        </tr>
      </tbody>
    </table>
    <FabButton position="bottom-right" @click="modalOpen = true">
      <AddFolderIcon />
    </FabButton>
    <FabButton position="bottom-left" @click="customModalOpen = true">
      <ClipIcon />
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
          // console.log(event);
          projectStore.addProject(
            event.projectName,
            event.projectVersion,
            event.projectDescription,
            [],
          );
          modalOpen = false;
        }
      "
    />
    <CustomModal :open="customModalOpen" @close="() => (customModalOpen = false)">
      <template #header>
        <h3 class="text-lg font-bold">Hola!</h3>
        <p class="py-4">Ingresa el nombre de la persona. Si quiere cerrar presione 'Cerrar'.</p>
      </template>
      <template #body>
        <input
          ref="nameRef"
          type="text"
          placeholder="Nombre"
          class="input input-bordered w-full flex-1 input-primary"
        />
      </template>
    </CustomModal>
  </div>
</template>

<script setup lang="ts">
import CustomModal from '@/modules/commons/components/CustomModal.vue';
import FabButton from '@/modules/commons/components/FabButton.vue';
import InputModal from '@/modules/commons/components/InputModal.vue';
import AddFolderIcon from '@/modules/commons/icons/AddFolderIcon.vue';
import ClipIcon from '@/modules/commons/icons/ClipIcon.vue';

import { ref } from 'vue';
import { useProjectStore } from '@/modules/projects/store/projects.store';

const projectStore = useProjectStore();

projectStore.addProject('Neptuno', 1.0, 'Proyecto Random Aguas', []);

// projectStore.getProjects.push({
//   name: 'Neptuno 2',
//   version: 4.0,
//   description: 'Proyecto Random Aguas 2',
//   tasks: [],
// });

// setTimeout(() => {
//   projectStore.getProjects[0].name = 'Neptuno 3';
//   projectStore.getProjects[1].name = 'Neptuno 3';
// }, 15000);

const modalOpen = ref(false);
const customModalOpen = ref(false);
</script>

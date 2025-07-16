<template>
  <dialog class="modal" :open="props.open">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Nuevo proyecto</h3>
      <p class="py-4">
        Completar los campos para crear un nuevo proyecto. Y presionar 'Aceptar' para crear el
        proyecto. Para cerrar el modal presionar 'Cerrar'
      </p>
      <div class="modal-action flex flex-col">
        <form method="dialog">
          <!-- @submit.prevent="$emit('submit', projectName)"> -->

          <input
            ref="projectNameRef"
            type="text"
            placeholder="Nombre del proyecto"
            class="input input-bordered w-full flex-1 input-primary"
            v-model="projectName"
          />
          <input
            type="number"
            placeholder="Versión del proyecto"
            class="input input-bordered w-full flex-1 input-primary mt-4"
            v-model="projectVersion"
          />
          <input
            type="text"
            placeholder="Descripción del proyecto"
            class="input input-bordered w-full flex-1 input-primary mt-4"
            v-model="projectDescription"
          />

          <div class="flex justify-end mt-8">
            <button
              class="btn mr-4"
              @click="
                () => {
                  $emit('close');
                  projectName = '';
                  projectVersion = '';
                  projectDescription = '';
                }
              "
            >
              Cerrar
            </button>
            <!-- <button type="submit" class="btn btn-primary"> -->
            <button
              type="button"
              @click="
                () => {
                  if (!projectName || !projectVersion || !projectDescription) {
                    projectNameRef?.focus();
                  } else {
                    $emit('submit', {
                      projectName: projectName,
                      projectVersion: new Number(projectVersion).valueOf(),
                      projectDescription: projectDescription,
                    });
                    projectName = '';
                    projectVersion = '';
                    projectDescription = '';
                  }
                }
              "
              class="btn btn-primary"
            >
              Aceptar
            </button>
          </div>
        </form>
      </div>
    </div>
    <!-- <div
      v-if="props.open"
      class="modal-backdrop fixed top-0 left-0 z-10 bg-black opacity-40 w-screen h-screen"
    /> -->
  </dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  open: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  open: false,
});

interface objectInputModal {
  projectName: string;
  projectVersion: number;
  projectDescription: string;
}

defineEmits<{
  (e: 'close'): void;
  (e: 'submit', value: objectInputModal): void;
}>();

const projectName = ref('');
const projectNameRef = ref<HTMLInputElement | null>(null);
const projectVersion = ref('');
const projectDescription = ref('');
</script>

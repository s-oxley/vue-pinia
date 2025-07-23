<template>
  <div class="w-full">
    <section class="m-2">
      <BreadCrumbs :project-id="project?.id" />
    </section>
    <section>
      <div class="overflow-x-auto">
        <table class="table table-zebra">
          <!-- head -->
          <thead>
            <tr v-if="project?.tasks ? project.tasks.length > 0 : false">
              <th class="w-14">Completada</th>
              <th>Tarea</th>
              <th>Completada en</th>
            </tr>
            <tr v-else>
              <th class="colspan-3 text-center">
                Sin tareas aún... qué hacer? Agregar un nueva tarea.
              </th>
            </tr>
          </thead>
          <tbody>
            <!-- row 1 -->
            <tr v-for="(task, index) in project?.tasks" :key="index" class="hover">
              <th>*</th>
              <td>{{ task.name }}</td>
              <td>{{ task.completedAt }}</td>
            </tr>
            <tr class="hover">
              <td></td>
              <td>
                <input
                  type="text"
                  class="input input-primary w-full opacity-60 transition-all hover:opacity-100 focus:opacity-100"
                  placeholder="Nueva tarea..."
                  autocomplete="off"
                  v-model="newTask"
                  @keyup.enter.prevent="newTaskAction"
                />
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BreadCrumbs from '@/modules/commons/components/BreadCrumbs.vue';
import { useProjectStore } from '../store/projects.store';
import type { Project } from '../interfaces/project.interface';
import { ref, watch } from 'vue';
import router from '@/router';

// import { useRoute } from 'vue-router';
// const route = useRoute();
// console.log(route.params.id);

interface Props {
  id: string;
}

const props = defineProps<Props>();
const project = ref<Project | undefined>();
const newTask = ref('');

const projectStore = useProjectStore();

console.log(`id - props: ${props.id}`);

watch(
  () => props.id,
  () => {
    project.value = projectStore.getProjects.find((item) => item.id === props.id);
    // console.log(`id: ${project.value?.id}`);
    // console.log(`project: ${project.value}`);
    if (!project.value) {
      router.replace('/');
    }
  },
  {
    immediate: true,
  },
);

const newTaskAction = (event: KeyboardEvent) => {
  if (event.key === 'Enter' && newTask.value.trim() !== '') {
    projectStore.addTask(project.value, newTask.value.trim());
    newTask.value = '';
  }
};
</script>

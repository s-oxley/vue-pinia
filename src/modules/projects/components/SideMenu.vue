<template>
  <aside class="bg-base-200 min-h-screen w-72">
    <h2 class="txt-lg font-bold mx-4">Proyectos</h2>
    <p v-if="projectStore.projectsAreEmpty" class="text-sm text-gray-500 mx-4">No hay proyectos</p>
    <!-- Menu -->
    <ul v-else class="menu">
      <li v-for="(project, index) in projectStore.getProjects" :key="index">
        <template v-if="project.tasks.length === 0">
          <RouterLink :to="`/project/${project.id}`">{{ project.name }}</RouterLink>
        </template>
        <template v-else>
          <details close>
            <summary>
              <RouterLink :to="`/project/${project.id}`">{{ project.name }}</RouterLink>
            </summary>
            <ul>
              <li v-for="(task, index) in project.tasks" :key="index">
                <RouterLink :to="`/project/${project.id}`">{{ task.name }}</RouterLink>
              </li>
            </ul>
          </details>
        </template>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { useProjectStore } from '@/modules/projects/store/projects.store';
import { RouterLink } from 'vue-router';

const projectStore = useProjectStore();
</script>

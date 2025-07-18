import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Project, Task } from '../interfaces/project.interface';
import { useLocalStorage } from '@vueuse/core';

export const useProjectStore = defineStore('projects', () => {
  // state
  const projects = ref(useLocalStorage<Project[]>('projects', []));

  // getters
  // const getProjects = computed(() => [...projects.value]);

  const getProjects = computed(() => projects.value);
  //lo que se agrega al array desde el getProjects queda reactivo.

  // actions
  function addProject(name: string, version: number, description: string, tasks: Task[]): void {
    const newProject: Project = {
      name,
      version,
      description,
      tasks,
    };
    projects.value.push(newProject);
  }

  return { getProjects, addProject };
});

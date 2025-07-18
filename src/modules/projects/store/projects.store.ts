import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Project, Task } from '../interfaces/project.interface';
import { useLocalStorage } from '@vueuse/core';
import { v4 as uuidv4 } from 'uuid';

export const useProjectStore = defineStore('projects', () => {
  // state
  const projects = ref(useLocalStorage<Project[]>('projects', []));

  // getters
  // const getProjects = computed(() => [...projects.value]);
  const getProjects = computed(() => projects.value);
  //lo que se agrega al array desde el getProjects queda reactivo.
  const projectsAreEmpty = computed(() => projects.value.length === 0);

  // actions
  function addProject(name: string, version: number, description: string, tasks: Task[]): void {
    const newProject: Project = {
      id: uuidv4(),
      name,
      version,
      description,
      tasks,
    };
    projects.value.push(newProject);
  }

  return { projects, getProjects, projectsAreEmpty, addProject };
});

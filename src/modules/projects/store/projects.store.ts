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
  // lo que se agrega al array desde el getProjects queda reactivo.
  const projectsAreEmpty = computed(() => projects.value.length === 0);
  //
  const projectsWithCompletedTasks = computed(() =>
    projects.value.map((project) => {
      return {
        ...project,
        tasksCompleted: project.tasks.filter((task) => task.completedAt).length,
        tasksTotals: project.tasks.length,
      };
    }),
  );

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

  function addTask(project: Project | undefined, taskName: string): void {
    const task: Task = {
      id: uuidv4(),
      name: taskName,
      completedAt: undefined,
    };

    if (!project) return;

    project.tasks.push(task);
  }

  function deleteTask(project: Project | undefined, task: Task): void {
    console.log(project?.id, task.id);
    if (!project) return;
    project.tasks = project.tasks.filter((t) => t.id !== task.id);
  }

  function toogleTask(project: Project | undefined, task: Task): void {
    if (!project) return;
    //const task = project.tasks.find((task) => task.id === taskId);
    if (!task) return;
    task.completedAt = task.completedAt ? undefined : new Date();
  }

  return {
    // state
    projects,

    // getters
    getProjects,
    projectsAreEmpty,
    projectsWithCompletedTasks,

    // actions
    addProject,
    addTask,
    toogleTask,
    deleteTask,
  };
});

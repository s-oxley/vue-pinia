import { useProjectStore } from '@/modules/projects/store/projects.store';
import { createPinia, setActivePinia } from 'pinia';
import { projectsFake } from '../../../mockData/projectsFake';

describe('useProjectStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    localStorage.clear();
  });

  it('should return default values', () => {
    const {
      addProject,
      addTask,
      projects,
      projectsAreEmpty,
      projectsWithCompletedTasks,
      getProjects,
      toogleTask,
      deleteTask,
    } = useProjectStore();

    expect(projects).toEqual([]);
    expect(projectsAreEmpty).toBe(true);
    expect(getProjects).toEqual([]);
    expect(projectsWithCompletedTasks).toEqual([]);
    expect(addProject).toBeInstanceOf(Function);
    expect(addTask).toBeInstanceOf(Function);
    expect(toogleTask).toBeInstanceOf(Function);
    expect(deleteTask).toBeInstanceOf(Function);
  });

  test('add project - action', () => {
    const store = useProjectStore();
    store.addProject('New - Project', 3.9, 'Test project', []);

    expect(store.projects.length).toBe(1);
    expect(store.projects[0]).toEqual({
      id: expect.any(String),
      name: 'New - Project',
      version: 3.9,
      description: 'Test project',
      tasks: [],
    });
  });

  test('should load from localStorage', () => {
    localStorage.setItem('projects', JSON.stringify(projectsFake));
    const store = useProjectStore();
    expect(store.projects.length).toBe(4);
  });

  test('add task - action to a project', () => {
    const store = useProjectStore();
    store.addProject('New - Project', 3.4, 'Test project 2', []);
    const project = store.projects.at(0)!;
    const taskName = 'New task';
    store.addTask(project, taskName);

    expect(project.tasks.length).toBe(1);
    expect(project.tasks.at(0)).toEqual({
      id: expect.any(String),
      name: taskName,
      completedAt: undefined,
    });
  });

  test('toogle task - action', () => {
    const store = useProjectStore();
    store.addProject('New - Project', 3.4, 'Test project 3', []);
    const project = store.projects.at(0)!;
    const taskName = 'New task';
    store.addTask(project, taskName);

    const task = project.tasks.at(0)!;
    store.toogleTask(project, task);

    expect(task.completedAt).toBeInstanceOf(Date);
  });

  it('should return the projects with completion', () => {
    const store = useProjectStore();
    // patch permite cambiar el estado de pinia, en este caso se cargan los proyectos fake de prueba.
    store.$patch((state) => {
      state.projects = projectsFake;
    });

    // console.log(store.projectsWithCompletedTasks);
    expect(store.projectsWithCompletedTasks.length).toBe(4);
    expect(store.projectsWithCompletedTasks.at(0)?.tasksTotals).toBe(3);
  });
});

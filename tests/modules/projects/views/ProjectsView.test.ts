import ProjectsView from '@/modules/projects/views/ProjectsView.vue';
import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import { projectsFake } from '../../../mockData/projectsFake';
import { useProjectStore } from '@/modules/projects/store/projects.store';
// import InputModal from '@/modules/commons/components/InputModal.vue';

describe('<ProjectsView />', () => {
  const wrapper = mount(ProjectsView, {
    global: {
      plugins: [createTestingPinia()],
      stubs: ['router-link'],
    },
  });

  const store = useProjectStore();

  beforeEach(() => {
    store.$patch(() => {
      store.projects = projectsFake;
    });
  });

  test('should render projects in view', () => {
    const trs = wrapper.findAll('tbody tr');
    expect(trs.length).toBe(4);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should call addProject method on modal', () => {
    const inputModalWrapper = wrapper.findComponent({ name: 'InputModal' });
    // console.log(inputModalWrapper);
    const projectNameTest = 'Nuevo-Projecto-Test';

    inputModalWrapper.vm.$emit('submit', {
      projectName: projectNameTest,
      projectVersion: 3.4,
      projectDescription: 'N/A',
    });
    expect(store.addProject).toHaveBeenLastCalledWith(projectNameTest, 3.4, 'N/A', []);
  });
});

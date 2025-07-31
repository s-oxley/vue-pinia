import SideMenu from '@/modules/projects/components/SideMenu.vue';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { useProjectStore } from '@/modules/projects/store/projects.store';
import { projectsFake } from '../../../mockData/projectsFake';
import { nextTick } from 'vue';

// libreria de desarrollo para testing de Pinia: https://pinia.vuejs.org/cookbook/testing.html

describe('<SideMenu />', () => {
  const wrapper = mount(SideMenu, {
    global: {
      plugins: [createTestingPinia()],
      stubs: ['router-link'],
    },
  });
  const store = useProjectStore();

  beforeEach(() => {
    store.$patch(() => {
      store.projects = [];
    });
  });

  test('should render with no projects', () => {
    // console.log(wrapper.html());
    expect(wrapper.html()).toContain('No hay proyectos');
  });

  test('should render with  projects', async () => {
    // modifica el estado del store con la funcion $patch
    store.$patch({
      projects: projectsFake,
    });

    // espera el proximo renderizado de Vue y entonces carga el cambio en el store de pinia con los datos
    // del projectsFake
    await nextTick();

    expect(wrapper.html()).not.toContain('No hay proyectos');
    expect(wrapper.html()).toMatchSnapshot();
  });
});

import { useProjectStore } from '@/modules/projects/store/projects.store';
import { projectsFake } from '../../../mockData/projectsFake';
import { mount } from '@vue/test-utils';
import ProjectView from '@/modules/projects/views/ProjectView.vue';
// import { useRoute } from 'vue-router';
// import type { Mock } from 'vitest';
import { createTestingPinia } from '@pinia/testing';

// vi.mock('vue-router');
// vi.mock('@/modules/projects/store/projects.store');

describe('<ProjectsView />', () => {
  createTestingPinia();
  const store = useProjectStore();

  beforeEach(() => {
    store.$patch(() => {
      store.projects = projectsFake;
    });
  });

  test('should be render with a project', () => {
    // (useProjectStore as any).mockReturnValue({
    //   projects: projectsFake,
    // });

    // const replaceSpy = vi.fn();
    // (useRoute as Mock).mockReturnValue({
    //   replace: replaceSpy,
    // });

    // console.log(`----> count: ${store.getProjects.length}`);

    const wrapper = mount(ProjectView, {
      props: {
        id: '2fd9f892-515e-466a-8f48-8f8c336dc174',
      },
      global: {
        stubs: ['RouterLink'],
      },
    });

    // console.log(wrapper.html());
    const rows = wrapper.findAll('tbody tr.hover');
    expect(rows.length).toBe(projectsFake.at(0)?.tasks.length);
  });
});

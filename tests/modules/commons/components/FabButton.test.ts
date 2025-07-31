import { shallowMount } from '@vue/test-utils';
import FabButton from '@/modules/commons/components/FabButton.vue';

describe('FabButton.vue', () => {
  it('renders default position', () => {
    const wrapper = shallowMount(FabButton);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.props().position).toBe('bottom-right');

    const buttonClass = wrapper.find('button').classes();
    // console.log(buttonClass);
    const classToHave = ['btn', 'btn-circle', 'btn-secondary', 'fixed', 'bottom-right'];
    expect(buttonClass).toEqual(classToHave);
  });

  test('renders with top-left position', () => {
    const wrapper = shallowMount(FabButton, {
      props: {
        position: 'top-left',
      },
    });

    expect(wrapper.props().position).toBe('top-left');
    const btn = wrapper.find('button');
    expect(btn.classes()).toContain('top-left');
  });

  test('renders with top-right position', () => {
    const wrapper = shallowMount(FabButton, {
      props: {
        position: 'top-right',
      },
    });

    const btn = wrapper.find('button');
    expect(btn.classes()).toContain('top-right');
  });

  test('renders slot content', () => {
    const wrapper = shallowMount(FabButton, {
      slots: {
        default: '<p>Custom Content</p>',
      },
    });

    // console.log(wrapper.html());
    const btnContent = wrapper.find('button p');
    expect(btnContent.exists()).toBe(true);
    expect(btnContent.text()).toBe('Custom Content');
  });
});

import CustomModal from '@/modules/commons/components/CustomModal.vue';
import { mount } from '@vue/test-utils';

describe('<CustomModal />', () => {
  it('renders dialog with default state', () => {
    const wrapper = mount(CustomModal);
    const modal = wrapper.find('.modal');
    expect(modal.attributes('open')).toBeUndefined();
  });

  test('renders dialog with header and body slots', () => {
    const wrapper = mount(CustomModal, {
      slots: {
        header: '<p>Custom Header</p>',
        body: '<p>Custom Body</p>',
      },
    });

    // console.log(wrapper.html());
    expect(wrapper.text()).toContain('Custom Header');
    expect(wrapper.text()).toContain('Custom Body');
  });

  it('open/close dialog when open property changes', async () => {
    const wrapper = mount(CustomModal, {
      props: {
        open: true,
      },
    });

    const modal = wrapper.find('.modal');
    expect(modal.attributes('open')).toBeDefined();

    // cambio de la prop
    await wrapper.setProps({ open: false });
    expect(modal.attributes('open')).toBeUndefined();
  });
});

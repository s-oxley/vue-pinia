vi.mock('@/router', () => ({
  default: 'ROUTER_MOCK',
}));

vi.mock('pinia', async (importOriginal) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const originalModule: any = await importOriginal();
  return {
    ...originalModule,
    createPinia: vi.fn().mockReturnValue('PINIA_MOCK'),
  };
});

describe('main.ts', () => {
  // obtengo el objeto vue
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const vueObj = require('vue');

  // espías del use y mount
  const useSpy = vi.fn();
  const mountSpy = vi.fn();

  // crea el mockup del createApp
  const createAppMockup = vi.fn().mockReturnValue({
    use: useSpy,
    mount: mountSpy,
  });

  // se enlaza el objeto vue con el mock de la función createApp
  vueObj.createApp = createAppMockup;

  test('test should be configuration with pinia and router', async () => {
    await import('@/main');

    expect(vueObj.createApp).toHaveBeenCalled();
    expect(mountSpy).toHaveBeenCalledWith('#app');

    console.log(useSpy.mock.calls);

    expect(useSpy).toHaveBeenCalledWith('ROUTER_MOCK');
    expect(useSpy).toHaveBeenCalledWith('PINIA_MOCK');
  });
});

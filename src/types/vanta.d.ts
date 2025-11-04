declare module "vanta/dist/vanta.clouds.min" {
  type VantaOptions = {
    el: HTMLElement;
    THREE: typeof import("three");
    [key: string]: unknown;
  };

  type VantaInstance = {
    destroy: () => void;
    restart?: () => void;
    setOptions?: (options: Partial<VantaOptions>) => void;
  };

  const VANTA: (options: VantaOptions) => VantaInstance;
  export default VANTA;
}

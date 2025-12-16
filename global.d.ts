import type { IStaticMethods } from "preline/dist";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export {};

declare module "*.mp4" {
  const src: string;
  export default src;
}
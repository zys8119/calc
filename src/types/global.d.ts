/// <reference types="vite/client" />
declare module "*.vue" {
  const src: any;
  export default src;
}

interface ImportMetaEnv {
  VITE_API: string;
}

declare global {}

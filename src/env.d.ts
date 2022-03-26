/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_BASE_PATH: string;
  readonly VITE_BASE_URL: string;
  readonly VITE_DEV_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
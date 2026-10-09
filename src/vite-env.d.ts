/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENV_LABEL?: string;
  readonly VITE_SHOW_ENV_BADGE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MAPIT_MOTORBIKE_ENDPOINT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface ImportMetaEnv {
  readonly VITE_MAPIT_MOTORBIKE_ENDPOINT: string
  readonly VITE_GOOGLE_MAPS_API_KEY: string
  readonly BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}


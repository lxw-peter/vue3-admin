/// <reference types="vite/client" />

interface ImportMetaEnv {
  // 下一行必须加上 readonly
  readonly VITE_BASE_URL: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

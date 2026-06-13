import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // username.github.io 仓库根域名，base 为 /
  base: '/',
  build: {
    outDir: 'docs',      // GitHub Pages 从 /docs 目录读取
    emptyOutDir: true,   // 每次构建前清空 docs/
  },
})

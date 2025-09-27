import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@mui/styled-engine': '@mui/styled-engine-sc',
      '@': path.resolve(__dirname, './src'),
    },
  },
})

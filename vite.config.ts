import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    proxy: {
      '/web-server': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/web-server/, ''),
        secure: false,
        ws: true,
      },
    },
  },
  resolve: {
    alias: [
      { find: '@assets', replacement: '/src/assets' },
      { find: '@components', replacement: '/src/components' },
      { find: '@layouts', replacement: '/src/layouts' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@', replacement: '/src' },
    ],
  },
})

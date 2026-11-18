import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-three': ['three', '@react-three/fiber', '@react-three/drei'],
          'vendor-charts': ['recharts'],
          'vendor-framer': ['framer-motion']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  server: {
    port: 3000,
    open: true
  }
})

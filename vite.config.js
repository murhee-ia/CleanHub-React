import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Listen on all available network interfaces
    port: 3000,  // Server will use this port
    cors: true   // Enable CORS for cross-origin requests
  }
})
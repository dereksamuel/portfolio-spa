import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  alias: {
    "@/*": ["./src/*"],
    "@atoms/*": ["./src/components/Atoms/*"],
    "@molecules/*": ["./src/components/Molecules/*"],
    "@organisms/*": ["./src/components/Organisms/*"],
    "@pages/*": ["./src/components/Pages/*"],
  }
})

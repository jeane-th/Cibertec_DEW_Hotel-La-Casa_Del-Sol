import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Cibertec_DEW_Hotel-La-Casa_Del-Sol/', // <- agrega esta línea
})

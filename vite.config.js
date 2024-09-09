import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VITE_BACKEND_URL } from './.env'

// https://vitejs.dev/config/
export default defineConfig({
  server :{
    proxy : {
      '/api' : {
        target : VITE_BACKEND_URL ,
        secure : false,
      },
    },
  },
  plugins: [react()],
})

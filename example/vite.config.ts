import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/react-video-player/",
  plugins: [react()],
  server:{
    host:true,
    fs:{
      allow:[".."]
    }
  }
})

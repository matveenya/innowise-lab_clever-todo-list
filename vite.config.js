import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
    server: {
    open: true,
    hot: true,
  },
  base: process.env.NODE_ENV === 'production' ? 'innowise-lab_clever-todo-list' : '/',
})

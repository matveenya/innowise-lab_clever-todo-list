import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
    server: {
    open: true,
    hot: true,
  },
  base: '/innowise-lab_clever-todo-list/',
})

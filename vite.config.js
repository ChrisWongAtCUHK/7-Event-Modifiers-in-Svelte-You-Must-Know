import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/7-Event-Modifiers-in-Svelte-You-Must-Know/',
  plugins: [svelte()],
})

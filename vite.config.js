import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' makes the build work from any path: Render (root) and GitHub Pages (/repo-name/).
export default defineConfig({ plugins: [react()], base: './' })

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'
import viteSvgIcons from 'vite-plugin-svg-icons'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src')
    }
  },
  // hmr: { overlay: false },
  plugins: [
    vue(),
    ViteComponents(),
    viteSvgIcons({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
      symbolId: 'svg-[dir]-[name]'
    })
  ]
})

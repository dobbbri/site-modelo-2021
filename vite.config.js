import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
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
    eslint(),
    ViteComponents(),
    viteSvgIcons({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]'
    })
  ]
})

import { defineConfig} from 'vitest/config'
import { fileURLToPath, URL } from 'url'
import Vue from '@vitejs/plugin-vue'


export default defineConfig({
    plugins:[Vue()],
    resolve: {
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
      },      
    test: {
        globals: true,
        environment: "jsdom",
    }
})
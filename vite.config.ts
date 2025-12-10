import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [
        tailwindcss(),
        vue(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    server: {
        port: 3000,
        open: true,
    },
    build: {
        // Performance optimizations for production
        target: 'es2020',
        minify: 'esbuild',
        rollupOptions: {
            output: {
                // Code splitting for better caching
                manualChunks: {
                    'vue-vendor': ['vue', 'vue-router'],
                },
                // Asset naming for better caching
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
                assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
            },
        },
        // CSS optimization
        cssCodeSplit: true,
        // Source maps for production debugging (optional)
        sourcemap: false,
        // Chunk size warning limit
        chunkSizeWarningLimit: 500,
    },
    // Optimize dependencies
    optimizeDeps: {
        include: ['vue', 'vue-router', '@vueuse/core'],
    },
})

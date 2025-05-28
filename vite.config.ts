import { defineConfig } from 'vite';
import { resolve } from 'path';
import postcss from '@vituum/vite-plugin-postcss';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export default defineConfig({
    plugins: [
        postcss(),
        createSvgIconsPlugin({
            iconDirs: [`${resolve(__dirname, 'src/assets/icons')}`],
            symbolId: 'svgicon-[name]',
        }),
    ],
    server: {
        port: 3900,
        open: true,
    },
    preview: {
        port: 4900,
    },
    base: './',
    publicDir: 'public',

    esbuild: {
        pure: ['console.log', 'console.debug'],
    },
    build: {
        chunkSizeWarningLimit: 2048,
        sourcemap: false,
        rollupOptions: {
            output: {
                chunkFileNames: 'assets/chunk-[hash].js',
                entryFileNames: 'assets/entry-[hash].js',
                assetFileNames: 'assets/asset-[hash].[ext]',
            },
        },
    },
});

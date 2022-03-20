// vite.config.ts
import * as path from "path";
import { defineConfig } from "vite";
import plugin from '@vitejs/plugin-react'

const lib = require('./package.json');

export default defineConfig({
    plugins: [
        plugin({
            'jsxRuntime': 'classic'
        })
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: lib.name,
            fileName: (format) => `${lib.name}.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React'
                }
            }
        }
    },
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

console.log("worked!")
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        open: true,
        proxy: {
            '/api': 'http://localhost:4000/',
        },
    },
    root: "client",

});
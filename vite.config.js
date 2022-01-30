import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

console.log("worked!")
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        open: true,
        host: "0.0.0.0",
        proxy: {
            '/api': 'http://localhost:4000/',
        },
    },
    root: "client",

});
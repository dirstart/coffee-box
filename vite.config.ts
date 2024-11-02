import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 监听所有地址，包括局域网和公网地址
    port: 5173, // 默认端口
    strictPort: true, // 如果端口被占用，则直接退出
    open: true, // 自动打开浏览器
  }
});

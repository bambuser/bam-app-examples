import { resolve, relative } from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import bambuserBamUIPlugin from '@bambuser/vite-plugin-bam-ui';
import bambuserAppDevEnvPlugin from '@bambuser/vite-plugin-bam-app-dev-env';
import bambuserAppRuntimePlugin from '@bambuser/vite-plugin-bam-app-runtime';

export default defineConfig(() => {
  return {
    base: './',
    build: {
      target: 'es2022',
      rollupOptions: {
        input: [
          resolve(__dirname, 'main.js'),
          resolve(__dirname, 'view/myTool/myTool.html'),
        ],
        output: {
          entryFileNames: (chunkInfo) => {
            return relative(process.cwd(), chunkInfo.facadeModuleId.replace('.html', '.js'));
          },
        },
      },
    },
    plugins: [
      react(),
      bambuserAppDevEnvPlugin(),
      bambuserAppRuntimePlugin(),
      bambuserBamUIPlugin(),
    ],
    server: {
      port: '5173',
      open: '/devenv/',
    },
  };
});

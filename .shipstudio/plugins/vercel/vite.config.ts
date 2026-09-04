import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.tsx',
      formats: ['es'],
      fileName: () => 'index.js',
    },
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: '__SHIPSTUDIO_REACT__',
          'react-dom': '__SHIPSTUDIO_REACT_DOM__',
          'react/jsx-runtime': '__SHIPSTUDIO_REACT__',
        },
        // Map externals to window globals for Blob URL loading
        paths: {
          react: 'data:text/javascript,export default window.__SHIPSTUDIO_REACT__;export const useState=window.__SHIPSTUDIO_REACT__.useState;export const useEffect=window.__SHIPSTUDIO_REACT__.useEffect;export const useRef=window.__SHIPSTUDIO_REACT__.useRef;export const useCallback=window.__SHIPSTUDIO_REACT__.useCallback;export const useMemo=window.__SHIPSTUDIO_REACT__.useMemo;export const createElement=window.__SHIPSTUDIO_REACT__.createElement;',
          'react/jsx-runtime':
            'data:text/javascript,const R=window.__SHIPSTUDIO_REACT__;export const jsx=R.createElement;export const jsxs=R.createElement;export const Fragment=R.Fragment;',
          'react-dom': 'data:text/javascript,export default window.__SHIPSTUDIO_REACT_DOM__;',
        },
      },
    },
    minify: false,
  },
});

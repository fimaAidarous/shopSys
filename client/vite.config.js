export default defineConfig({
  server:{
    proxy: {
      '/api':{
        target: 'http://localhost:8000',
        secure: false,
      },
    },
  },

  plugins: [React()],
});
import inject from '@rollup/plugin-inject';

// vite.config.js
export default {
  // don't allow automatic port switching as we need to know the port
  server: {
    strictPort: true,
    host: "0.0.0.0",
  },
  plugins: [
    inject({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  base: "/platinum_18c_ar_xr-uci/",
  build: {
    outDir: "./dist",
  },
  publicDir: "./public",
};

// vite.config.js
export default {
  // don't allow automatic port switching as we need to know the port
  server: {
    strictPort: true,
    host: "0.0.0.0",
  },
  base: "/platinum_18c_ar_xr-uci/",

  // COMMENTED OUT FOR BUILDING REASONS

  // build: {
  //   outDir: "./build",
  // },

  publicDir: "public",
};

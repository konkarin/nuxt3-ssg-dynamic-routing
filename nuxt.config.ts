import axios from "axios";

export default defineNuxtConfig({
  hooks: {
    async "nitro:config"(nitroConfig) {
      if (nitroConfig.dev) {
        return;
      }
      // ..Async logic..
      const res = await axios.get("https://api.nuxtjs.dev/mountains");
      if (nitroConfig.prerender?.routes === undefined) {
        return;
      }
      nitroConfig.prerender.routes = res.data.map((mount: any) => {
        return `/mountains/${mount.slug}`;
      });
    },
  },
  // nitro: {
  //   prerender: {
  //     routes: ["/random/1", "/random/2", "/random/3"],
  //   },
  // },
  // experimental: {
  //   payloadExtraction: true,
  // },
});

import axios from "axios";

export default defineNuxtConfig({
  // https://github.com/nuxt/framework/issues/4919#issuecomment-1124349857
  hooks: {
    async "nitro:config"(nitroConfig) {
      if (nitroConfig.dev) {
        return;
      }
      const res = await axios.get("https://api.nuxtjs.dev/mountains");
      if (nitroConfig.prerender?.routes === undefined) {
        return;
      }
      nitroConfig.prerender.routes = res.data.map((mount: any) => {
        return `/mountains/${mount.slug}`;
      });
    },
  },
});

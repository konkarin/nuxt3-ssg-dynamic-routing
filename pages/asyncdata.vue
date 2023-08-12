<template>
  <h1>asyncdata</h1>
  <ul>
    <li v-for="mountain in mountains">
      <NuxtLink :to="`/mountains/${mountain.slug}`">
        {{ mountain.slug }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts">
import { Mountain } from "~~/type";

export default defineNuxtComponent({
  async asyncData({ payload }: Record<string, any>) {
    const targetPayloads = Object.entries(payload.data).find(([key, value]) => {
      return key.includes("options");
    });

    console.log("payload", (targetPayloads?.[1] as any)?.mountains);

    if ((targetPayloads?.[1] as any)?.mountains) {
      return {
        mountains: payload.data.mountains,
      };
    } else {
      const mountains = await $fetch<Mountain[]>(
        "https://api.nuxtjs.dev/mountains"
      );

      console.log(mountains);

      return {
        mountains,
      };
    }
  },
  data() {
    return {
      mountains: [] as Mountain[],
    };
  },
});
</script>

<template>
  <div v-if="mountain.title === ''">no mountain</div>
  <div v-else>
    {{ mountain }}
  </div>
</template>

<script setup lang="ts">
import { Mountain } from "~~/type";

const { params } = useRoute();
const pageKey = "mountains: " + params.id;
const { data: mountains } = useFetch<Mountain[]>(
  "https://api.nuxtjs.dev/mountains",
  {
    key: pageKey,
  }
);

const mountain = computed(() => {
  if (mountains.value !== null) {
    const maybeMountain = mountains.value.find((mountain) => {
      return mountain.slug === params.id;
    });

    if (maybeMountain !== undefined) {
      return maybeMountain;
    }
  }

  return {
    title: "",
  };
});
</script>

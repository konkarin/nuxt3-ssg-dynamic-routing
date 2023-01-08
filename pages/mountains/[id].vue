<template>
  <div>
    <div v-if="mountain === undefined">no mountain</div>
    <div v-else>
      {{ mountain }}
    </div>
  </div>
</template>

<script setup lang="ts">
const { params } = useRoute();
const pageKey = "mountains: " + params.id;
const { data: mountains } = await useFetch<any>(
  "https://api.nuxtjs.dev/mountains",
  {
    key: pageKey,
  }
);

const mountain = mountains.value.find((mountain: any) => {
  return mountain.slug === params.id;
});
</script>

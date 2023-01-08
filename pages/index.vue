<template>
  <ul>
    <li v-for="mountain in mountains">
      <NuxtLink :to="`/mountains/${mountain.slug}`">
        {{ mountain.slug }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
const { data: mountains } = await useFetch<any>(
  "https://api.nuxtjs.dev/mountains"
);
</script>

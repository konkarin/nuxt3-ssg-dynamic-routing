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
import { Mountain } from "~~/type";

const { data: mountains } = await useFetch<Mountain[]>(
  "https://api.nuxtjs.dev/mountains"
);
</script>

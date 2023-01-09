<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const { data: mountains } = await useFetch<any>(
  "https://api.nuxtjs.dev/mountains",
  {
    // このkeyがpayload.jsのオブジェクト内のdataのkeyと同じ
    key: "mountains",
  }
);

provide("mountains", mountains.value);
</script>

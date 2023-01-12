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

const { data: mountains } = await useFetch<any>(
  "https://api.nuxtjs.dev/mountains",
  {
    // このkeyがpayload.jsのオブジェクト内のdataのkeyと同じ
    key: "mountains",
  }
);

const mountain = mountains.value.find((mountain: any) => {
  return mountain.slug === params.id;
});
</script>

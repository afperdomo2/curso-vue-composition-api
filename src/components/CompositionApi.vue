<template>
  <h1>Composition API</h1>
</template>

<script>
import { onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {
      console.log("mounted Composition API");
    });
  },
};
</script>

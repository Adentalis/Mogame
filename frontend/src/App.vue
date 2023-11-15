<template>
  <div id="content">
    <h1>Mogame</h1>
    <button @click="test">Test</button>
    {{ persons }}
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const persons = ref([]);

onMounted(async () => {
  const req = await fetch('http://localhost:3000/persons');
  const response = await req.json();
  persons.value = response;
  console.log(response);
});

const test = (): number => {
  console.log('the-');
  return 3;
};
</script>

<style scoped>
#content {
  color: blue;
  background-color: #242424;
}
</style>

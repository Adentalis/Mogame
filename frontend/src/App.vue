<template>
  <div id="content-left">
    <h1>Mogame</h1>
    <PlanetLink />
    <PlanetLink />
    <PlanetLink />
    <PlanetLink />
    <PlanetLink />
    <PlanetLink />
    <PlanetLink />
    <PlanetLink />
    <PlanetLink />
    <PlanetLink />
    <PlanetLink />
    <PlanetLink />
    <PlanetLink />
    <PlanetLink />
    <PlanetLink />
    <PlanetLink />
    <PlanetLink />
    <PlanetLink />
  </div>
  <div id="content-middle">
    <button @click="test">Test</button>
    {{ persons }}
  </div>
  <div id="content-bottom"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import PlanetLink from './components/PlanetLink.vue';
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
#content-left {
  border: 3px green solid;
  flex-basis: 25%;
  overflow-y: auto;
  height: calc(100vh - 50px);
}

#content-middle {
  border: 3px orange solid;
  flex-basis: 75%;
  overflow-y: auto;
  height: calc(100vh - 50px);
}

#content-bottom {
  border: 3px blue solid;
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>

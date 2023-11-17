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
</template>

<script setup lang="ts">
import PlanetLink from './PlanetLink.vue';
</script>

<style scoped lang="scss">
#content-left {
  border: 3px green solid;
  flex-basis: 25%;
  overflow-y: auto;
  height: calc(100vh - 100px);
  min-width: 300px;
}
</style>

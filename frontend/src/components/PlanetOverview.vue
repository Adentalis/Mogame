<template>
  <div id="content-middle">
    <div id="ressources">
      <div>
        <span>Met</span>
        <p>123456</p>
      </div>
      <div>
        <span>Kris</span>
        <p>123456</p>
      </div>
    </div>
    <div id="buildings">
      <h2>Buildings</h2>
      <div class="building">
        <h3>Metallmine</h3>
        <div>
          <span>Stufe: </span>
          <span>22</span>
        </div>
        <div>
          <span>Kosten: </span>
          <span>22Met, 33Crys</span>
        </div>
        <button>Build</button>
      </div>
    </div>
    <div id="test">
      {{ persons }}
    </div>
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
</script>

<style scoped lang="scss">
#content-middle {
  border: 3px orange solid;
  flex-basis: 75%;
  overflow-y: auto;
  height: calc(100vh - 100px);
}

#ressources {
  border: 1px red solid;
  display: flex;
  justify-content: space-around;

  div {
    text-align: center;
    min-width: 150px;
    border: 1px aliceblue solid;

    span {
      font-size: xx-large;
    }
  }
}

#buildings {
  .building {
    border: 1px greenyellow solid;
    width: 200px;
    div {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { World } from "../world/World.js";

const store = useStore(); // Access the Vuex store

onMounted(() => {
  main();
})

function main() {
  // Get a reference to the container element
  const container = document.querySelector("#scene-container");

  // Create an instance of the World app
  const world = new World(container);

  // Start the loop (produce a stream of frames)
  world.start();
}

const setVisibility = () => {
  console.log('click')
  // Use store.commit to update the state mutation
  store.commit('setVisibility');
  // store.state.threeVisible= !store.state.threeVisible
}

const visibility = computed(() => {
  return store.state.threeVisible; // Access the state using store
});
</script>

<template>
  <div class="vue">
    <p>hello</p>
    <!-- <button class="buttonVisible" @click="setVisibility">{{ $store.state.threeVisible }}</button> -->
    <button class="buttonVisible" @click="setVisibility">{{ visibility }}</button>
  </div>
  <div v-show="visibility" id="scene-container"></div>
</template>

<style scoped>
.vue {
  border: 2px solid red;
}
.buttonVisible{
  background-color: orange;
  color: white;
}
</style>

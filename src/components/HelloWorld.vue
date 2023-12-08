<script setup>
// import router from "./router";
import { World } from "../world/World.js";
import { ref, onMounted } from 'vue'

// const el = ref()

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
 

</script>

<template>
  <div class="vue">
    <p>hello</p>
  </div>
  <div id="scene-container"></div>
</template>

<style scoped>
.vue {
  border: 2px solid red;
}
</style>

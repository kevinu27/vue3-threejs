import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'

// // import router from "./router";
// import { World } from "./world/World.js";
 
// function main() {
//  // Get a reference to the container element
//  const container = document.querySelector("#scene-container");
 
//  // Create an instance of the World app
//  const world = new World(container);
 
//  // Start the loop (produce a stream of frames)
//  world.start();
// }
 
// main();
 
createApp(App).use(store).mount("#app");
// const app = createApp(App)
// // app.use(store)
// // app.use(router)
// app.mount('#app')

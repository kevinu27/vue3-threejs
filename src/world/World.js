import { createCamera } from "./Components/objects/camera";
import { createLights } from "./components/objects/lights";
import { createScene } from "./components/objects/scene";
import { createRenderer } from "./systems/renderer.js";
import { Loop } from "./systems/Loop.js";
import { Resizer } from "./systems/Resizer.js"
import { createTerrain } from "./Components/objects/plane"
import { createControls } from "./systems/controls.js"
 
// These variables are module-scoped: we cannot access them
// from outside the module.
let camera;
let renderer;
let scene;
let loop;
 
class World {
   constructor(container) {
     // Instances of camera, scene, and renderer
     camera = createCamera();
     scene = createScene("blue");
     renderer = createRenderer();
     console.log('renderer', renderer.domElement)
     console.log('container', container )
      // Initialize Loop
     loop = new Loop(camera, scene, renderer);
      container.append(renderer.domElement);
      const controls = createControls(camera, renderer.domElement)
      // Light Instance, with optional light helper
     const { light, lightHelper } = createLights("white");
      loop.updatables.push(light);
      scene.add(light);
      ///////////////////////////////


    
  
    
      ///////////////////////////////
      //--------------------------
      ///////////////////////////////
      // Random values for terrain vertices
      const randomVals = [];
      
      for (let i = 0; i < 12675; i++) {
        randomVals.push(Math.random() - 0.5);
      }
      
      // Terrain Instance
      let terrain = createTerrain({
        color: "green",
        randVertexArr: randomVals,
      });
      scene.add(light, terrain);
      ///////////////////////////////
      loop.updatables.push(light);
      loop.updatables.push(terrain);
      
     const resizer = new Resizer(container, camera, renderer);
      resizer.onResize = () => {
      this.render();
     };
 
    }
    render() {
     // Draw a single frame
     renderer.render(scene, camera);
   }
    // Animation handlers
   start() {
     loop.start();
   }
    stop() {
     loop.stop();
   }
 }
  export { World };
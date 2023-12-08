import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { MathUtils } from "three";
 
function createControls(camera, canvas) {
 const controls = new OrbitControls(camera, canvas);
 
 // Enable controls?
 controls.enabled = true;
 controls.autoRotate = true;
 controls.autoRotateSpeed = 0.2;
 
 // Control limits
 // It's recommended to set some control boundaries
 // to prevent the user from clipping with the objects.
 
 // Y axis
 controls.minPolarAngle = MathUtils.degToRad(0); // default
 controls.maxPolarAngle = MathUtils.degToRad(360);
 
 // X axis
 //   controls.minAzimuthAngle = ...
 //   controls.maxAzimuthAngle = ...
 
 // Smooth camera:
 // Remember to add to loop updatables to work.
 controls.enableDamping = true;
 controls.enableZoom = true;
 controls.enablePan = true;
 
 controls.tick = () => controls.update();
 
 return controls;
}
 
export { createControls };
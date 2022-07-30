import { onMount } from "solid-js";
import {
  initInteractions,
  initRender,
  initScene,
  initSideEffects,
} from "./threeActions.js";

const ThreeScene = () => {
  let canvas;
  onMount(async () => {
    setTimeout(() => {
      if (!canvas) return;
      const {
        scene,
        renderer,
        camera,
        transformControl,
        cameraControl,
        lights,
      } = initScene(canvas);

      initInteractions({
        canvas,
        camera,
        renderer,
        transformControl,
        cameraControl,
        lights,
      });

      initSideEffects({ scene, transformControl });
      initRender({ scene, renderer, camera });
    }, 500);
  });

  return (
    <div class="absolute flex-1 w-full h-full top-0 left-0 overflow-hidden">
      <canvas ref={canvas}></canvas>
    </div>
  );
};

export default ThreeScene;

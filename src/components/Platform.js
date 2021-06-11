import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

import React, { Suspense, useEffect, useRef, useState } from "react";
import { Provider, useSelector } from "react-redux";
import { store } from "../app/store";
import PlatformRaised from "./Platform-raised";
import BadModel from "./Training-model-bad";
import {
  grabModelImported,
  selectModelImported,
} from "../features/modelImportedSlice";

useGLTF.preload("/platform.gltf");
useGLTF.preload("/platform-raised.gltf");

const Platform = () => {
  const [modelLoaded, setModelLoaded] = useState(false);

  const modelIsImported = useSelector(selectModelImported);

  useEffect(() => {
    modelIsImported ? setModelLoaded(true) : setModelLoaded(false);
  }, [modelIsImported]);

  console.log("model imported", modelIsImported);

  return (
    <>
      <Canvas
        shadowMap
        colorManagement
        camera={{ position: [-5, 2, 10], fov: 60 }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={0.5}
          shadow-mapSize-Width={1024}
          shadow-mapSize-Height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-far={10}
          shadow-camera-top={10}
          shadow-camera-bottom={10}
        />
        <Suspense fallback={null}>
          <Provider store={store}>
            <PlatformRaised />
            {modelLoaded && <BadModel />}
            {!modelLoaded && <OrbitControls />}
          </Provider>
        </Suspense>
      </Canvas>
    </>
  );
};

export default Platform;

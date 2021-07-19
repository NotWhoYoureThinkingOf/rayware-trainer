/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState, useEffect } from "react";
import { useGLTF, OrbitControls, TransformControls } from "@react-three/drei";
import { useDrag } from "react-use-gesture";
import { useThree } from "@react-three/fiber";
import { Controls, useControl } from "react-three-gui";
import { useSpring, a } from "@react-spring/three";
import { useDispatch } from "react-redux";
import {
  grabModelSelected,
  releaseModelSelected,
} from "../features/modelSelectedSlice";
import { Html } from "@react-three/drei";

export default function Model(props) {
  const [selected, setSelected] = useState(false);
  const [pointerOver, setPointerOver] = useState(false);
  const dispatch = useDispatch();
  const orbit = useRef();
  const group = useRef();
  const supportsModel = useRef();
  const transform = useRef();
  const { nodes, materials } = useGLTF("/supportsmodel.glb");
  const [position, setPosition] = useState([0, 0.4, 0]);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const mode = useControl("mode", {
    type: "select",
    items: ["translate", "rotate"],
  });

  const bind = useDrag(
    ({ offset: [x, y] }) => {
      const [, , z] = position;
      setPosition([0, 0.4, 0]);
    },
    { pointerEvents: true }
  );

  const modelProps = useSpring({
    color: selected ? "#35a5ff" : "#8989a1",
  });

  const chooseModel = () => {
    if (selected === true) {
      setSelected(false);
      dispatch(releaseModelSelected());
    } else {
      setSelected(true);
      dispatch(grabModelSelected());
    }
  };

  useEffect(() => {
    dispatch(releaseModelSelected());
  }, []);

  useEffect(() => {
    if (transform.current) {
      const controls = transform.current;
      controls.setMode(!pointerOver ? "translate" : "rotate");
      const callback = (event) => (orbit.current.enabled = !event.value);
      controls.addEventListener("dragging-changed", callback);
      return () => controls.removeEventListener("dragging-changed", callback);
    }
  }, [pointerOver]);

  return (
    <group ref={group} {...props} dispose={null}>
      <TransformControls ref={transform} position={[0, -0.4, -1]}>
        <a.mesh
          onClick={chooseModel}
          geometry={nodes["Training-Model-Supports"].geometry}
          material={nodes["Training-Model-Supports"].material}
          material-color={modelProps.color}
          material-roughness={0.65}
          position={[0, -0.88, 0.6]}
          rotation={[-1.57, 3.15, 3.8]}
          scale={[1 / 17, 1 / 17, 1 / 17]}
          {...bind()}
          ref={supportsModel}
        />
        {selected && (
          <Html style={{ pointerEvents: "none" }}>
            <div>
              <p>BASE</p>
              <p>COPY</p>
              <p>RESET</p>
              <p onClick={() => setPointerOver(false)}>MOVE</p>
              <p onClick={() => setPointerOver(true)}>ROTATE</p>
            </div>
          </Html>
        )}
      </TransformControls>
      <OrbitControls ref={orbit} />
    </group>
  );
}

useGLTF.preload("/supportsmodel.glb");

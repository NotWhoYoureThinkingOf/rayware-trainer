/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState, useEffect } from "react";
import styles from "../styles/FixedModelOptions.module.css";
import { useGLTF, OrbitControls, TransformControls } from "@react-three/drei";
import { useDrag } from "react-use-gesture";
import { useThree } from "@react-three/fiber";
import { Controls, useControl } from "react-three-gui";
import { useSpring, a } from "@react-spring/three";
import { useDispatch, useSelector } from "react-redux";
import {
  grabModelSelected,
  releaseModelSelected,
  selectModelSelected,
} from "../features/modelSelectedSlice";
import {
  releaseModelImported,
  selectModelImported,
} from "../features/modelImportedSlice";
import { Html } from "@react-three/drei";

export default function Model(props) {
  const [selected, setSelected] = useState(false);
  const [pointerOver, setPointerOver] = useState(false);
  const dispatch = useDispatch();
  const orbit = useRef();
  const group = useRef();
  const badModel = useRef();
  const transform = useRef();
  const { nodes, materials } = useGLTF("/fixedmodel.gltf");
  const [orbital, setOrbital] = useState(true);
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

  useEffect(() => {
    dispatch(releaseModelSelected());
    setSelected(false);
  }, []);

  const chooseModel = () => {
    if (selected === true) {
      setSelected(false);
      dispatch(releaseModelSelected());
    } else {
      setSelected(true);
      dispatch(grabModelSelected());
    }
  };

  const deleteModel = () => {
    if (selected) {
      setSelected(false);
      dispatch(releaseModelImported());
    }
  };

  useEffect(() => {
    if (transform.current) {
      const controls = transform.current;
      controls.setMode(pointerOver ? "translate" : "rotate");
      const callback = (event) => (orbit.current.enabled = !event.value);
      controls.addEventListener("dragging-changed", callback);
      return () => controls.removeEventListener("dragging-changed", callback);
    }
  }, [pointerOver]);

  return (
    <group ref={group} {...props} dispose={null}>
      <TransformControls
        ref={transform}
        position={[0, -0.4, 0]}
        // onPointerOver={() => console.log("controls")}
        // onPointerDown={() => console.log("pointer down")}
      >
        <a.mesh
          onClick={chooseModel}
          onPointerEnter={() => setPointerOver(true)}
          onPointerLeave={() => setPointerOver(false)}
          onPointerDown={() =>
            setPointerOver(transform.current.mode === "rotate" ? false : true)
          }
          position={position}
          {...bind()}
          ref={badModel}
          geometry={nodes["Training-Model-Fixed"].geometry}
          material={nodes["Training-Model-Fixed"].material}
          material-color={modelProps.color}
          material-roughness={0.65}
          position={[2.5, -0.8, 3.3]}
          rotation={[-1.6, 3.15, 3.8]}
          scale={[1 / 17, 1 / 17, 1 / 17]}
        ></a.mesh>
        {selected && (
          <Html>
            <div className={styles.modelOptions}>
              <p>BASE</p>
              <p>COPY</p>
              <p>RESET</p>
            </div>
          </Html>
        )}
      </TransformControls>
      <OrbitControls ref={orbit} />
    </group>
  );
}

useGLTF.preload("/fixedmodel.gltf");

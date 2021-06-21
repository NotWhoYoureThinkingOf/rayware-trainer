/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState, useEffect } from "react";
import styles from "../styles/ModelOptions.module.css";
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
import { grabModelFixed, selectModelFixed } from "../features/modelFixedSlice";
import { Html } from "@react-three/drei";
import { ThumbDown } from "@material-ui/icons";

export default function Model(props) {
  const [selected, setSelected] = useState(false);
  const [pointerOver, setPointerOver] = useState(false);
  const dispatch = useDispatch();
  const selectedModel = useSelector(selectModelSelected);
  const importedModel = useSelector(selectModelImported);
  const orbit = useRef();
  const group = useRef();
  const badModel = useRef();
  const transform = useRef();
  const { nodes, materials } = useGLTF("/training-model-bad.glb");
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

  const fixModel = () => {
    dispatch(releaseModelImported());
    dispatch(grabModelFixed());
  };

  useEffect(() => {
    if (transform.current) {
      const controls = transform.current;
      controls.setMode(!pointerOver ? "translate" : "rotate");
      const callback = (event) => (orbit.current.enabled = !event.value);
      controls.addEventListener("dragging-changed", callback);
      return () => controls.removeEventListener("dragging-changed", callback);
    }
  }, [pointerOver]);

  // can now add fix button to switch to fixed model. still need to figure out the sluggishness of hovering over the fixed model

  return (
    <group ref={group} {...props} dispose={null}>
      <TransformControls ref={transform} position={[0, -0.4, -1]}>
        <a.mesh
          onClick={chooseModel}
          // onPointerEnter={() => setPointerOver(true)}
          // onPointerLeave={() => setPointerOver(false)}
          // onPointerDown={() =>
          //   setPointerOver(transform.current.mode === "rotate" ? false : true)
          // }
          position={position}
          {...bind()}
          ref={badModel}
          geometry={nodes["Training-Model-Bad"].geometry}
          material={nodes["Training-Model-Bad"].material}
          material-color={modelProps.color}
          material-roughness={0.65}
          position={[0, 0.8, -1]}
          rotation={[-1.51, 0, -4]}
          scale={[1 / 3, 1 / 3, 1 / 3]}
        ></a.mesh>
        {selected && (
          <Html>
            <div className={styles.modelOptions}>
              <p>BASE</p>
              <p>COPY</p>
              <p>RESET</p>
              <p onClick={() => setPointerOver(false)}>MOVE</p>
              <p onClick={() => setPointerOver(true)}>ROTATE</p>
            </div>
            <div className={styles.modelRepair}>
              <ThumbDown style={{ color: "#cf142b", fontSize: "1rem" }} />
              <p className={styles.modelRepair__text}>
                Unrepaired intraoral scan detected. Scan repair required.
              </p>
              <div className={styles.modelRepair__buttons}>
                <p className={styles.modelRepair__help}>HELP</p>
                <p className={styles.modelRepair__fix} onClick={fixModel}>
                  FIX
                </p>
              </div>
            </div>
          </Html>
        )}
      </TransformControls>
      <OrbitControls ref={orbit} />
    </group>
  );
}

useGLTF.preload("/training-model-bad.glb");

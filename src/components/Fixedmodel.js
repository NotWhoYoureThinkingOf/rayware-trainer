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
import { releaseModelFixed } from "../features/modelFixedSlice";
import {
  releaseFixTraining,
  selectFixTraining,
} from "../features/fixTrainingSlice";
import {
  grabSupportsModel,
  releaseAddSupportsTraining,
  selectSupportsTraining,
} from "../features/supportsModelSlice";
import { Html } from "@react-three/drei";
import { Close, ThumbDown } from "@material-ui/icons";

export default function Model(props) {
  const [selected, setSelected] = useState(false);
  const [pointerOver, setPointerOver] = useState(false);
  const fixTraining = useSelector(selectFixTraining);
  const supportsTraining = useSelector(selectSupportsTraining);
  const dispatch = useDispatch();
  const orbit = useRef();
  const group = useRef();
  const fixedModel = useRef();
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

  const addTheSupports = () => {
    dispatch(releaseModelFixed());
    dispatch(grabSupportsModel());
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

  console.log("pointerOver", pointerOver);
  console.log("position", position);

  return (
    <group ref={group} {...props} dispose={null}>
      <TransformControls ref={transform} position={[0, -0.4, 0]}>
        <a.mesh
          onClick={chooseModel}
          position={position}
          {...bind()}
          ref={fixedModel}
          geometry={nodes["Training-Model-Fixed"].geometry}
          material={nodes["Training-Model-Fixed"].material}
          material-color={modelProps.color}
          material-roughness={0.65}
          position={[2.5, -0.9, 3.3]}
          rotation={[-1.57, 3.15, 3.8]}
          scale={[1 / 17, 1 / 17, 1 / 17]}
        ></a.mesh>
        {selected && (
          <Html style={{ pointerEvents: "none" }}>
            <div className={styles.modelOptions}>
              <p>BASE</p>
              <p>COPY</p>
              <p>RESET</p>
              <p onClick={() => setPointerOver(false)}>MOVE</p>
              <p onClick={() => setPointerOver(true)}>ROTATE</p>
            </div>
            {supportsTraining && (
              <div className={styles.addSupports}>
                <ThumbDown style={{ color: "#cf142b", fontSize: "1rem" }} />
                <p className={styles.addSupports__text}>
                  Insufficient base detected. Support structure required.
                </p>
                <div className={styles.addSupports__buttons}>
                  <p className={styles.addSupports__help}>HELP</p>
                  <p
                    className={styles.addSupports__fix}
                    onClick={addTheSupports}
                  >
                    FIX
                  </p>
                </div>
              </div>
            )}
          </Html>
        )}
        {fixTraining && (
          <Html style={{ pointerEvents: "none" }}>
            <div className={styles.fixTraining}>
              <h3>Scan Repair</h3>
              <Close
                style={{
                  position: "absolute",
                  right: ".5rem",
                  top: ".5rem",
                  cursor: "pointer",
                  pointerEvents: "auto",
                }}
                onClick={() => dispatch(releaseFixTraining())}
              />
              <p>
                Scan Repair has fixed the model and RayWare will be able to
                display the "Printable" status.
              </p>
              <p>
                In the desktop application of RayWare, this process will take a
                moment and display a progress bar. It may still also detect that
                the model needs supports which can be applied by pressing the
                "Fix" button again or generating them in the supports menu.
              </p>
            </div>
          </Html>
        )}
      </TransformControls>
      <OrbitControls ref={orbit} />
    </group>
  );
}

useGLTF.preload("/fixedmodel.gltf");

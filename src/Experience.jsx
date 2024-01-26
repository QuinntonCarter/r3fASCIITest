import { useEffect, useRef } from "react";
import { AsciiRenderer, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import {
  Bloom,
  EffectComposer,
  Glitch,
  Noise,
  Outline,
  Pixelation,
  Vignette,
  DepthOfField,
  SSR,
  ASCII,
} from "@react-three/postprocessing";

import { useControls } from "leva";

export default function Experience() {
  const { fgColor, bgColor, invertCharacters, resolution } = useControls(
    "ASCII Tweaks",
    {
      fgColor: "#FFFFFF",
      bgColor: "#000000",
      // bugged **
      // resolution: {
      //   value: 0.15,
      //   min: 0,
      //   max: 2.5,
      //   step: 0.01,
      // },
      //  bugged: doesn't rerender on property change **
      // invertCharacters: true,
    }
  );
  useEffect(() => {
    console.log("rendered");
  }, []);

  return (
    <>
      <color args={["#ffffff"]} attach="background" />
      <EffectComposer disableNormalPass multisampling={4}>
        <AsciiRenderer
          fgColor={fgColor}
          bgColor={bgColor}
          resolution={0.157}
          invert={true}
        />
      </EffectComposer>

      {/* performance viewer */}
      {/* <Perf position="top-left" /> */}

      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh castShadow position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh castShadow position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh
        // doesn't work without shadows enabled on canvas in index.jxs
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial
          toneMapped={false}
          color="greenyellow"
          metalness={0}
          roughness={0}
        />
      </mesh>
    </>
  );
}

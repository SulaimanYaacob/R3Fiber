"use client";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

interface Props {
  position: [number, number, number];
  color: string;
  size?: [number, number, number];
  animated?: boolean;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
}

function Cube({
  color,
  position,
  size,
  animated,
  rotateX,
  rotateY,
  rotateZ,
}: Props) {
  const ref = useRef<Mesh | null>(null);

  //* Delta = Current Frame - Previous Frame
  useFrame((state, delta) => {
    if (animated) {
      ref.current!.rotation.x += delta * 0.5;
      ref.current!.rotation.y += delta * 0.5;
    }

    ref.current!.rotateX((rotateX && rotateX / 100) || 0);
    ref.current!.rotateY((rotateY && rotateY / 100) || 0);
    ref.current!.rotateZ((rotateZ && rotateZ / 100) || 0);

    // ref.current!.position.x = Math.sin(state.clock.elapsedTime);
    // ref.current!.position.x = Math.tan(state.clock.elapsedTime) * 0.25;
    // ref.current!.position.z = Math.sin(state.clock.elapsedTime) * 5;
    // ref.current!.rotation.z += delta * 0.25;
  });

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Cube;

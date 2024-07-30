"use client";
import { Canvas } from "@react-three/fiber";

function MainCanvas({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: "60vw", height: "50vh" }}>
      <Canvas>{children}</Canvas>
    </div>
  );
}

export default MainCanvas;

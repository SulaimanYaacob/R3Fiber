"use client";
import { Canvas } from "@react-three/fiber";

function MainCanvas({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return <Canvas style={style}>{children}</Canvas>;
}

export default MainCanvas;
